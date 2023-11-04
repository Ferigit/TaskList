import { FormSection, InputProps } from "interfaces/form";

export const forms: { [K in FormSection]: InputProps[] } = {
  createTask: [
    {
      label: "Task title",
      type: "text",
      name: "title",
      placeholder: "Task title",
      value: "",
      validations: [
        {
          type: "required",
          message: "Title is required",
        },
      ],
    },
    {
      label: "Task description",
      type: "text",
      name: "description",
      placeholder: "Task description",
      value: "",
      validations: [
        {
          type: "required",
          message: "Description is required",
        },
      ],
    },
  ],
};
