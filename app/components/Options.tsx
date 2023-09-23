import { Center, Flex, Pressable, Text } from "native-base";
import React from "react";
import { Word } from "../hooks/useQuestions";

interface IOptionsProps {
  options: string[];
  onPress: (text: string) => void;
  selectedWord: string | null;
}

const Options = ({ options, onPress, selectedWord }: IOptionsProps) => {
  return (
    <Center mt="1/6">
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" w="80%">
        {options.map((option) => (
          <Option
            key={option}
            text={option}
            onPress={onPress}
            selected={option === selectedWord}
          />
        ))}
      </Flex>
    </Center>
  );
};

export default Options;

interface IOption {
  text: string;
  selected?: boolean;
  onPress: (text: string) => void;
}

export const Option = ({ text, onPress, selected = false }: IOption) => {
  return (
    <Pressable
      m={2}
      p={4}
      bgColor="white"
      // w="80px"
      shadow={"7"}
      borderRadius="2xl"
      _pressed={{ opacity: 0.2 }}
      opacity={selected ? 0.2 : 1}
      onPress={() => onPress(text)}
    >
      <Text color="darkBlue.800" opacity={selected ? 0 : 1} textAlign="center">
        {text}
      </Text>
    </Pressable>
  );
};
