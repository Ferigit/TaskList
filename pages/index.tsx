import { useState } from "react";
import Link from "next/link";
import { Layout } from "components/shared";
import { AddTaskForm, TaskList } from "components/business/Tasks";

const IndexPage = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Task List</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </Layout>
  );
};

export default IndexPage;
