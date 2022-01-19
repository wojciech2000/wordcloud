import Input from "components/common/input/Input.component";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { IPlayerForm, playerFormSchema } from "./PlayerForm.model";
import Button from "components/common/button/Button.component";
import { GameContext } from "components/context/GameContext.context";
import { routes } from "utilities/config/routes";

const PlayerForm = () => {
  const navigate = useNavigate();
  let { setNick } = useContext(GameContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPlayerForm>({
    resolver: yupResolver(playerFormSchema),
  });

  const onSubmit = (data: IPlayerForm) => {
    console.log(data);
    setNick(data.nick);

    navigate(routes.cloudGame);
  };

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="nick"
        placeholder="Enter your nickname here..."
        register={register("nick")}
        error={errors.nick}
        wrapperClassName="mb-4 w-full"
        inputClassName="w-full"
      />

      <Button type="submit" className="mx-auto">
        play
      </Button>
    </form>
  );
};

export default PlayerForm;
