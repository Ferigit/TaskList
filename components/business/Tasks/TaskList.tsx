import React from "react";
import { completeTask, remeveTask } from "services/tasks";
import { Task } from "./Task";

const TaskList = ({ tasks, setTasks }) => {
  const handleRemoveTask = async (taskId) => {
    try {
      const res = await remeveTask(taskId);

      if (res.status === 204) {
        setTasks(tasks.filter((task) => task.id !== taskId));
      }
    } catch (err: any) {}
  };
  const handleCompleteTask = async (taskId) => {
    try {
      const res = await completeTask(taskId);
      if (res.id) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      }
    } catch (err: any) {}
  };
  if (!tasks.length) {
    return (
      <section className="mt-6 border-2 border-grey rounded-lg py-6 flex justify-center items-center">
        <p>Task list is empty.</p>
      </section>
    );
  }
  return (
    <section className="mt-4">
      <div className="flex justify-between items-center bg-grey p-6 rounded-t-lg font-medium">
        <h3>TASKS</h3>
        <h3>ACTIONS</h3>
      </div>
      <ul className="border-2 border-grey border-t-0 rounded-b-lg">
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...{
              task,
              handleRemoveTask,
              handleCompleteTask,
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export { TaskList };
