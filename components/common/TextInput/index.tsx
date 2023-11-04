import React from "react";
import clsx from "classnames";
import { ErrorMessage } from "components/common";
import { InputProps } from "interfaces/form";

const TextInput: React.FC<InputProps> = ({
  placeholder = "placeholder ... ",
  ...props
}) => {
  const {
    label,
    type = "text",
    name,
    control,
    disabled,
    register,
    errors,
  } = props;

  return (
    <div
      data-testid="text-input-container"
      className={clsx("relative flex justify-start items-start flex-col")}
    >
      {label && (
        <label
          data-testid="text-input-label"
          htmlFor={name}
          className="block text-blue-oil mb-1 font-medium leading-6"
        >
          {label}
        </label>
      )}
      <input
        data-testid="text-input-field"
        type={type}
        id={name}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(
          `block w-full px-4 py-[11px] leading-6 text-base text-blue-oil rounded-[10px] focus:outline-none ${
            errors?.[name]?.message
              ? "border border-red-400"
              : "border border-grey-500 "
          }`
        )}
        {...(control ? { ...control } : register ? { ...register(name) } : {})}
      />
      <ErrorMessage error={errors?.[name]?.message} />
    </div>
  );
};

export default TextInput;
