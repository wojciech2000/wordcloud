import PlayerForm from "./playerForm/PlayerForm.component";
import Title from "components/common/title/Title.component";

const StartGame = () => {
  return (
    <div className="w-72 h-screen pt-20 flex justify-start items-center flex-col m-auto md:w-96 md:pt-0 md:justify-center">
      <Title className="mb-4">Wordcloud game</Title>

      <PlayerForm />
    </div>
  );
};

export default StartGame;
