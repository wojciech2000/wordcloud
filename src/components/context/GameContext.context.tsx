import { createContext, useState } from "react";

const defaultState = {
  nick: "",
  setNick: () => {},

  selectedWords: [],
  setSelectedWords: () => {},

  allWords: [],
  setAllWords: () => {},

  goodWords: [],
  setGoodWords: () => {},
};

interface IGameContext {
  nick: string;
  setNick: React.Dispatch<React.SetStateAction<string>>;

  selectedWords: string[];
  setSelectedWords: React.Dispatch<React.SetStateAction<string[]>>;

  allWords: string[];
  setAllWords: React.Dispatch<React.SetStateAction<string[]>>;

  goodWords: string[];
  setGoodWords: React.Dispatch<React.SetStateAction<string[]>>;
}

export const GameContext = createContext<IGameContext>(defaultState);

export const GameContextProvider: React.FC = ({ children }) => {
  const [nick, setNick] = useState("");
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const [allWords, setAllWords] = useState<string[]>([]);
  const [goodWords, setGoodWords] = useState<string[]>([]);

  return (
    <GameContext.Provider
      value={{
        nick,
        setNick,

        selectedWords,
        setSelectedWords,

        allWords,
        setAllWords,

        goodWords,
        setGoodWords,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
