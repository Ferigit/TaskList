import React, { useState } from "react";
import { CheckboxInput } from "components/common";
import clsx from "classnames";
import Image from "next/image";

const Task = ({ task, handleCompleteTask, handleRemoveTask }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li
      key={task.id}
      className="flex justify-start items-center gap-x-2 border-b-2 border-b-grey py-4 px-6 flex-col"
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-start gap-x-3">
          <CheckboxInput
            control={{
              value: task.completed,
              onChange: (e) => handleCompleteTask(task.id),
            }}
          />
          <p
            className={clsx(
              task.completed ? "!line-through" : "",
              "w-[30rem] truncate text-ellipsis"
            )}
          >
            {task.title}
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <Image
            onClick={() => handleRemoveTask(task.id)}
            className="cursor-pinter"
            src="/images/icons/delete-icon.svg"
            alt="delete-task"
            width="24"
            height="24"
          />
          <Image
            onClick={toggleAccordion}
            className={`${isOpen ? "!transform !rotate-180" : ""}`}
            src="/images/icons/down-arrow.svg"
            alt="delete-task"
            width="24"
            height="24"
          />
        </div>
      </div>
      {isOpen && (
        <div className="px-2 text-left w-full p-4 border-t-2 border-dashed border-t-grey mt-4">
          Description: {task.description}
        </div>
      )}
    </li>
  );
};

export { Task };
