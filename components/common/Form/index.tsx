import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { InputProps, SchemaForm } from "interfaces/form";
import { TextInput, CheckboxInput } from "components/common";
import clsx from "classnames";

interface Props {
  onSubmit: (data: unknown) => void;
  labelButtonSubmit?: string;
  titleForm?: string;
  initialValues?: unknown;
  validationSchema: SchemaForm;
  inputs: InputProps[];
  className?: string;
  titleClassName?: string;
}

const Form = ({ ...props }: Props) => {
  const {
    initialValues,
    inputs,
    onSubmit,
    validationSchema,
    titleForm,
    labelButtonSubmit = "Submit",
    className,
    titleClassName,
  } = props;

  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { ...(initialValues as any) },
  });
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = formMethods;
  const createInputs = () =>
    inputs.map(
      ({ validations, typeValue, value, disabled, ...inputProps }: any) => {
        const formControlProps = {
          register,
          errors,
          setValue,
          trigger,
          disabled,
        };
        switch (inputProps.type) {
          case "text":
            return (
              <TextInput
                {...inputProps}
                key={inputProps.name}
                {...formControlProps}
              />
            );
          case "checkbox":
            return (
              <CheckboxInput
                {...inputProps}
                key={inputProps.name}
                {...formControlProps}
              />
            );
          default:
            return (
              <TextInput
                {...inputProps}
                key={inputProps.name}
                {...formControlProps}
              />
            );
        }
      }
    );

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className={clsx(
          "bg-secondary rounded-md flex flex-col gap-2 w-full",
          className
        )}
      >
        {titleForm && (
          <h5 className={clsx("text-2xl pb-2 mb-2 ", titleClassName)}>
            {titleForm}
          </h5>
        )}

        <section className="flex-1 flex flex-col gap-1">
          {createInputs()}
        </section>

        <button
          className="bg-blue-ocean-deep transition-opacity text-white w-fit py-[10px] px-5 rounded-[32px] hover:opacity-90 active:opacity-100 font-bold mt-4"
          type="submit"
        >
          {labelButtonSubmit}
        </button>
      </form>
    </FormProvider>
  );
};
export default Form;
