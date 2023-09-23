import { Box, Flex, Text } from "native-base";
import React from "react";

interface IDisplayWordProps {
  words: string[];
  targetWord: string;
}

const DisplayWord = ({ words, targetWord }: IDisplayWordProps) => {
  return (
    <Flex direction="row" flexWrap="wrap" my={3} justifyContent="center">
      {words.map((word) => {
        if (word === targetWord) {
          return <TargetText key={word} text={word} />;
        }

        return <RegularText key={word} text={word} />;
      })}
    </Flex>
  );
};

export default DisplayWord;

interface IDisplayText {
  text: string;
}
const RegularText = ({ text }: IDisplayText) => {
  return (
    <Text fontSize="lg" px={1} m={1} color="white">
      {text}
    </Text>
  );
};
const TargetText = ({ text }: IDisplayText) => {
  return (
    <Text
      fontWeight={800}
      underline
      fontSize="xl"
      color="white"
      lineHeight={26}
      px={1}
      m={1}
    >
      {text}
    </Text>
  );
};
