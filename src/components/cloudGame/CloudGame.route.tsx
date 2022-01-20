import Button from "components/common/button/Button.component";
import Title from "components/common/title/Title.component";
import { GameContext } from "components/context/GameContext.context";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { routes } from "utilities/config/routes";
import { questions } from "utilities/helpers/mockAPI.helper";
import Questions from "./questions/Questions.component";
import Timer, { TIME } from "./timer/Timer.component";

const CloudGame = () => {
  const navigate = useNavigate();

  const { setAllWords, setGoodWords, setSelectedWords } = useContext(GameContext);

  const [checkAnswers, setCheckAnswers] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [time, setTime] = useState(TIME);

  useEffect(() => {
    const drawQuestionIndex = Math.floor(Math.random() * questions.length);
    const { question, all_words: allWords, good_words: goodWords } = questions[drawQuestionIndex];

    setAllWords(allWords);
    setGoodWords(goodWords);
    setSelectedWords([]);
    setCurrentQuestion(question);
  }, []);

  const handleButtonEvent = useCallback(() => {
    if (!checkAnswers) {
      setCheckAnswers(true);
    } else {
      navigate(routes.summary, { state: time });
    }
  }, [checkAnswers]);

  return (
    <div className="w-full px-12 h-screen pt-20 flex justify-start items-center flex-col m-auto md:max-w-4xl md:pt-0 md:justify-center">
      <Title size="30" className="uppercase mb-4 text-center">
        {currentQuestion}
      </Title>

      <Timer
        time={time}
        setTime={setTime}
        checkAnswers={checkAnswers}
        setCheckAnswers={setCheckAnswers}
      />

      <Questions checkAnswers={checkAnswers} />

      <Button onClick={handleButtonEvent} type="submit" className="mx-auto mt-4">
        {!checkAnswers ? "check answers" : "finish game"}
      </Button>
    </div>
  );
};

export default CloudGame;
