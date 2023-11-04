import { OptionalObjectSchema, TypeOfShape } from "yup/lib/object";
import { AnyObject } from "yup/lib/types";
import {
  UseFormRegister,
  DeepMap,
  MultipleFieldErrors,
  Message,
  FieldValues,
  Ref,
} from "react-hook-form";

export type FormSection = "createTask";

export interface InputProps {
  type?: "text" | "radio" | "email" | "password" | "select" | "checkbox";
  name?: string;
  value?: string | number | boolean;
  placeholder?: string;
  label?: string;
  typeValue?: "boolean" | "number";
  validations?: Validation[];
  options?: Opt[];
  control?: {
    onChange: (value: any) => void;
    value?: any;
    checked?:boolean;
  };
  register?: UseFormRegister<any>;
  errors?: FieldErrors<FieldValues>;
  disabled?: boolean;
}

export interface Opt {
  value: string | number;
  desc: string;
}

export interface Validation {
  type: "required" | "isEmail" | "minLength" | "isTrue" | "oneOf";
  value?: string | number | boolean;
  message: string;
  ref?: string;
}

export type SchemaForm = OptionalObjectSchema<
  {
    [x: string]: any;
  },
  AnyObject,
  TypeOfShape<{
    [x: string]: any;
  }>
>;

export type CustomInputProps = Omit<
  InputProps,
  "validations" | "typeValue" | "value"
>;
export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};
export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;
