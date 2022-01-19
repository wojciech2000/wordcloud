import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ onClick, children, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-white border border-primary text-primary px-6 py-1 rounded-md",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
