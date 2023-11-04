import React from "react";
import clsx from "classnames";
import { ErrorMessage } from "components/common";
import { InputProps } from "interfaces/form";

const CheckboxInput: React.FC<InputProps> = ({
  placeholder = "write here ... ",
  ...props
}) => {
  const { label, name, control, disabled, register, errors } = props;

  return (
    <>
      <div
        data-testid="text-input-container"
        className={clsx("relative flex justify-start items-start gap-x-2" )}
      >
        <input
          data-testid="text-input-field"
          type={"checkbox"}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          className="w-6 h-6 accent-purple !text-danger bg-purple focus:!ring-danger border-purple text-purple"
          {...(control
            ? { ...control }
            : register
            ? { ...register(name) }
            : {})}
        />
        {label && (
          <label
            data-testid="text-input-label"
            htmlFor={name}
            className="block text-blue-oil mb-1 font-medium leading-6"
          >
            {label}
          </label>
        )}
      </div>
      <ErrorMessage error={errors?.[name]?.message} />
    </>
  );
};

export default CheckboxInput;
