import Input from "components/common/input/Input.component";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { IPlayerForm, playerFormSchema } from "./PlayerForm.model";
import Button from "components/common/button/Button.component";

const PlayerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPlayerForm>({
    resolver: yupResolver(playerFormSchema),
  });

  const onSubmit = (data: IPlayerForm) => {
    console.log(data);
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
