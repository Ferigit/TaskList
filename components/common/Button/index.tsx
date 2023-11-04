import React from "react";
import clsx from "classnames";

interface ButtonProps {
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}
const sizesEnum = {
  xl: "!text-xl !px-5 !py-3 ",
  md: "!text-md !px-4 !py-2",
  sm: "!text-sm !px-2 ",
};
const Button: React.FC<ButtonProps> = ({
  size,
  label,
  children,
  className = "",
  icon,
  disabled = false,
  onClick = () => {},
  type,
}) => {
  return (
    <button
      className={clsx(
        "bg-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
        className,
        sizesEnum[size]
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label ? label : children}
    </button>
  );
};

export default Button;
