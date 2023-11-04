import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import clsx from "classnames";
import { TextInput, Button } from "components/common";
import { addTask } from "services/tasks";
import { v4 } from "uuid";
import { TaskFormType } from "interfaces/task";

const validationSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
}).required();

const AddTaskForm = ({ tasks, setTasks, onSubmit }) => {
  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {
    register,
    reset,
    formState: { errors },
  } = formMethods;

  const handleAddTask = async (data: TaskFormType) => {
    const { title, description } = data;

    const newTask = {
      id: v4(),
      title,
      description,
      completed: false,
    };
    try {
      const res = await addTask(newTask);
      if (res.id) {
        setTasks([...tasks, res]);
        reset();
        onSubmit();
      }
    } catch (err: any) {}
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(handleAddTask)}
        className={clsx("bg-secondary rounded-md flex flex-col gap-3 w-full")}
      >
        <h2 className="text-center font-medium text-xl">ADD NEW TASK</h2>
        <TextInput
          label="Title"
          register={register}
          name="title"
          placeholder="Task title"
          errors={errors}
        />
        <TextInput
          label="Description"
          register={register}
          placeholder="Task description"
          name="description"
          errors={errors}
        />
        <Button
          type="submit"
          className="text-white rounded-full w-full bg-primary h-12"
        >
          <p>ADD</p>
        </Button>
      </form>
    </FormProvider>
  );
};

export { AddTaskForm };
