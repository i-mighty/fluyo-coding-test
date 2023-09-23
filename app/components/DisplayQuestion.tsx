import { Box, Flex, Text } from "native-base";
import React from "react";
import { Word } from "../hooks/useQuestions";
import { TouchableWithoutFeedback } from "react-native";
import Popover from "react-native-popover-view";

interface IDisplayQuestionProps {
  words: Word[];
  targetWord: string;
  selectedWord: string | null;
  correct?: boolean | null;
}

const DisplayQuestion = ({
  words,
  targetWord,
  selectedWord,
  correct,
}: IDisplayQuestionProps) => {
  return (
    <Flex
      direction="row"
      flexWrap="wrap"
      my={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {words.map((word) => {
        if (word.gr === targetWord) {
          if (selectedWord) {
            return (
              <Box
                key={word.gr}
                bgColor={
                  correct == null || correct == undefined
                    ? "white"
                    : correct
                    ? "#119eee"
                    : "red.400"
                }
                borderRadius={10}
                shadow={8}
                px={2}
                pb={4}
              >
                <Text
                  fontWeight={800}
                  fontSize={"lg"}
                  marginTop={4}
                  lineHeight={24}
                  color="darkBlue.800"
                >
                  {selectedWord}
                </Text>
              </Box>
            );
          } else {
            return (
              <Text
                key="empty-field"
                fontWeight={800}
                fontSize={"lg"}
                marginTop={4}
                lineHeight={24}
                color="#fff"
              >
                {"_______"}
              </Text>
            );
          }
        }

        return (
          <Popover
            key={word.gr}
            from={
              <TouchableWithoutFeedback>
                <Text
                  px={1}
                  m={1}
                  fontSize="lg"
                  borderStyle="dotted"
                  borderBottomWidth={2}
                  borderColor="white"
                  color="white"
                >
                  {word.gr}
                </Text>
              </TouchableWithoutFeedback>
            }
          >
            <Box px={4} py={2} pt={0}>
              <Text fontSize={"md"} marginTop={4} lineHeight={24}>
                {word.en}
              </Text>
            </Box>
          </Popover>
        );
      })}
    </Flex>
  );
};

export default DisplayQuestion;
