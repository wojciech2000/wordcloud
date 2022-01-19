import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import InputError from "./InputError.component";

export interface IInputTypeProps {
  register: UseFormRegisterReturn;
  error?: FieldError;
  inputClassName?: string;
  wrapperClassName?: string;
}

type IInputProps = IInputTypeProps & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({
  error,
  type = "text",
  name,
  register,
  inputClassName,
  wrapperClassName,
  ...props
}) => (
  <div className={clsx("relative", wrapperClassName)}>
    <input
      type={type}
      id={name}
      className={clsx(
        "bg-white border border-gray-400 p-2 placeholder-gray-600 rounded-md outline-none mb-5",
        {
          "border-error": error,
        },
        inputClassName,
      )}
      {...register}
      {...props}
    />

    <InputError errorMessage={error?.message} />
  </div>
);

export default Input;
