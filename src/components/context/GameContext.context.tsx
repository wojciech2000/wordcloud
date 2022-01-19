import { createContext, useState } from "react";

const defaultState = {
  nick: "",
  setNick: () => {},
};

interface IGameContext {
  nick: string;
  setNick: (newNick: string) => void;
}

export const GameContext = createContext<IGameContext>(defaultState);

export const GameContextProvider: React.FC = ({ children }) => {
  const [nick, setNick] = useState("");

  return <GameContext.Provider value={{ nick, setNick }}>{children}</GameContext.Provider>;
};
