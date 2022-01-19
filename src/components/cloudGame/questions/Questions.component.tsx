import clsx from "clsx";
import Text from "components/common/text/Text.component";
import { GameContext } from "components/context/GameContext.context";
import React, { useContext } from "react";

interface IQuestionsProps {
  allWords: string[];
  goodWords: string[];
  checkAnswers: boolean;
}

const Questions: React.FC<IQuestionsProps> = ({ checkAnswers }) => {
  const { setSelectedWords, selectedWords, allWords, goodWords } = useContext(GameContext);

  const toggleWords = (word: string) => {
    setSelectedWords(currWords => {
      let newWordsArray = currWords;
      const selectedWordIndex = currWords.findIndex(currWord => currWord === word);

      if (selectedWordIndex === -1) {
        newWordsArray = [...currWords, word];
      } else {
        newWordsArray = currWords.filter(currWord => currWord !== word);
      }

      return newWordsArray;
    });
  };

  return (
    <div className="border w-full p-4 flex flex-wrap justify-evenly items-center sm:p-12">
      {allWords.map(word => {
        const isInSelectedWords = selectedWords.includes(word);
        const isInGoodWords = goodWords.includes(word);
        const isInBadWords = isInSelectedWords && !isInGoodWords;

        return (
          <button
            className={clsx(
              "mx-4 my-2 rounded border overflow-hidden sm:mx-12 sm:my-8",
              !checkAnswers && isInSelectedWords && "border-primary",
              checkAnswers && "cursor-default",
              checkAnswers && isInSelectedWords && isInGoodWords && "bg-green-500 border-green-500",
              checkAnswers && isInGoodWords && "border-green-500",
              checkAnswers && isInBadWords && "border-red-500",
            )}
            onClick={() => !checkAnswers && toggleWords(word)}
            key={word}
          >
            <Text
              className={clsx(
                "py-1 px-2",
                !checkAnswers && "transition-colors hover:bg-primary hover:text-white",
                checkAnswers && isInSelectedWords && isInGoodWords && "text-white",
              )}
            >
              {word}
            </Text>
          </button>
        );
      })}
    </div>
  );
};

export default Questions;
