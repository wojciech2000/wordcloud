import Button from "components/common/button/Button.component";
import Title from "components/common/title/Title.component";
import { GameContext } from "components/context/GameContext.context";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { routes } from "utilities/config/routes";

const Summary = () => {
  const navigate = useNavigate();
  const { state: time } = useLocation();

  const { nick, selectedWords, goodWords } = useContext(GameContext);

  const [collectedPoints, setCollectedPoints] = useState(0);

  useEffect(() => {
    const correctSelectedWords = goodWords.filter(goodWord =>
      selectedWords.includes(goodWord),
    ).length;
    const wrongSelectedWords = selectedWords.filter(
      selectedWord => !goodWords.includes(selectedWord),
    ).length;
    const unselectedCorrectWords = goodWords.filter(
      goodWord => !selectedWords.includes(goodWord),
    ).length;

    const extraTime = (typeof time === "number" ? time : 0) / 2;

    const pointsAmount =
      correctSelectedWords * 2 - (wrongSelectedWords + unselectedCorrectWords) + extraTime;

    setCollectedPoints(pointsAmount);
  }, []);

  const handlePlayAgain = () => {
    navigate(routes.cloudGame);
  };

  return (
    <div className="w-full h-screen pt-20 flex justify-start items-center flex-col text-center sm:pt-0 sm:justify-center">
      <Title size="36" className="mb-2">
        Congratulations, {nick}
      </Title>
      <Title size="30" className="mb-4">
        Your scrore:
      </Title>

      <Title size="30" color="primary" className="mb-8 sm:mb-12">
        {collectedPoints} points
      </Title>

      <Button onClick={handlePlayAgain}>play again</Button>
    </div>
  );
};

export default Summary;
