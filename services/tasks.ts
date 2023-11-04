import { ITask } from "interfaces/task";
import { BASE_URL } from "./baseURL";

export async function fetchTasks() {
  const response = await fetch(BASE_URL + "/api/tasks");
  const data = await response.json();
  return data;
}

export const addTask = async (newTask: ITask): Promise<ITask> => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  const data = await response.json();
  return data;
};

export const completeTask = async (taskId: string): Promise<ITask> => {
  const response = await fetch(`/api/tasks?id=${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const remeveTask = async (taskId: string): Promise<any> => {
  const response = await fetch(`/api/tasks?id=${taskId}`, {
    method: "DELETE",
  });

  return response;
};
