import React from "react";

interface InputProps {
  label?: string;
  name?: string;
}

const TextInput: React.FC<InputProps> = ({ label, name }) => (
  <div>
    <label htmlFor={name} className="label">
      {label}
    </label>
    <input type="text" id={name} name={name} />
  </div>
);

export { TextInput };
