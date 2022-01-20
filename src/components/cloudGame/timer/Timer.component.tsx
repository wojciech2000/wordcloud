import Title from "components/common/title/Title.component";
import { useEffect } from "react";

export const TIME = 10;

interface ITimer {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  checkAnswers: boolean;
  setCheckAnswers: React.Dispatch<React.SetStateAction<boolean>>;
}

const Timer: React.FC<ITimer> = ({ time, setTime, checkAnswers, setCheckAnswers }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(currTime => currTime - 1);
    }, 1000);

    if (time <= 0 || checkAnswers) {
      setCheckAnswers(true);
      clearTimeout(timer);
      return;
    }

    return () => clearTimeout(timer);
  }, [time, checkAnswers]);

  return (
    <Title className="mb-4" color={time > 3 ? "primary" : "error"}>
      {time}
    </Title>
  );
};

export default Timer;
