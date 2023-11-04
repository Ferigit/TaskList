import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  icon,
  disabled = false,
  onClick = () => {},
  type,
}) => {
  return (
    <button
      className={`bg-purple font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
