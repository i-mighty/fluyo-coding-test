import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Modal,
  Spinner,
  Text,
  VStack,
  useDisclose,
} from "native-base";
import React, { FC, useEffect, useMemo, useState } from "react";
import DisplayWord from "../components/DisplayWord";
import DisplayQuestion from "../components/DisplayQuestion";
import Options from "../components/Options";
import { useQuestions } from "../hooks/useQuestions";
import { RootStackScreenProps } from "../../types";
import { Fontisto } from "@expo/vector-icons";

interface TestScreenProps extends RootStackScreenProps<"Test"> {}

const TestScreen: FC<TestScreenProps> = () => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const { isOpen, onClose, onToggle } = useDisclose();

  const fetchQuestions = useQuestions((state) => state.fetchQuestions);
  const isLoading = useQuestions((state) => state.isLoading);
  const question = useQuestions((state) => state.activeQuestion);
  const gotoNextQuestion = useQuestions((state) => state.gotoNextQuestion);
  const target = question?.targetWord;
  const correct =
    selectedWord && isOpen ? (selectedWord == target?.gr ? true : false) : null;
  const enWord = useMemo(() => {
    if (question) {
      question.words.sort((a, b) => a.en_pos - b.en_pos);
      return question.words.map((w) => w.en);
    }
  }, [question]);
  const grWord = useMemo(() => {
    if (question) {
      return question.words.sort((a, b) => a.gr_pos - b.gr_pos);
    }
  }, [question]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  useEffect(() => {
    setSelectedWord(null);
  }, [question]);

  if (!isLoading && !question) {
    return (
      <Box h="full" justifyContent={"center"} alignItems="center">
        <HStack space={2} alignItems="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      </Box>
    );
  }

  return (
    <VStack h="full" bgColor="blue.200" safeArea>
      <VStack
        borderTopRadius="50"
        mt="auto"
        h="5/6"
        p={4}
        bgColor="darkBlue.800"
      >
        <Text mt="4" textAlign="center" color="white">
          Fill in the missing word
        </Text>
        <DisplayWord
          words={enWord || []}
          targetWord={question?.targetWord.en || ""}
        />
        <DisplayQuestion
          words={grWord || []}
          targetWord={question?.targetWord.gr || ""}
          selectedWord={selectedWord}
          correct={correct}
        />
        <Options
          selectedWord={selectedWord}
          options={question?.options || []}
          onPress={setSelectedWord}
        />
        <Box mt="auto">
          <Button
            onPress={() => onToggle()}
            disabled={!selectedWord}
            px={6}
            py={5}
            bgColor="#119eee"
            // borderRadius={40}
            _text={{ color: "#fff", fontSize: "lg" }}
            _pressed={{ opacity: 0.6 }}
            _disabled={{ opacity: 0.4 }}
          >
            {selectedWord ? "Check Answer" : "Continue"}
          </Button>
        </Box>
      </VStack>
      <Modal isOpen={isOpen} onClose={() => onClose()} size="full">
        <Modal.Content
          backgroundColor={selectedWord == target?.gr ? "#119eee" : "red.400"}
          marginBottom={0}
          marginTop={"auto"}
        >
          {/* <Modal.CloseButton /> */}
          <Modal.Body>
            <Box
              px={4}
              py={2}
              backgroundColor={
                selectedWord == target?.gr ? "#119eee" : "red.400"
              }
            >
              <Flex my={8} flexDir={"row"} justifyContent={"space-between"}>
                <HStack>
                  <Text color="#fff" fontSize="lg" fontWeight={800}>
                    {selectedWord == target?.gr ? "Great Job" : "Answer"}
                  </Text>
                  {!(selectedWord == target?.gr) && (
                    <Text color="#fff" fontSize="lg">
                      {" "}
                      : {target?.gr}
                    </Text>
                  )}
                </HStack>
                <Fontisto name="flag" size={24} color="#fff" />
              </Flex>
              <Button
                onPress={() => {
                  gotoNextQuestion();
                  onToggle();
                }}
                disabled={!selectedWord}
                px={6}
                py={5}
                bgColor="#fff"
                // borderRadius={40}
                _text={{
                  color: selectedWord == target?.gr ? "#119eee" : "red.400",
                  fontSize: "lg",
                }}
                _pressed={{ opacity: 0.6 }}
                _disabled={{ bgColor: "#11ecff22", _text: { color: "#fff6" } }}
              >
                Continue
              </Button>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </VStack>
  );
};

export default TestScreen;
