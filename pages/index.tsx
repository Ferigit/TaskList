import { useState, useEffect } from "react";
import { Layout } from "components/shared";
import { Button, Modal } from "components/common";
import { AddTaskForm, TaskList } from "components/business/Tasks";
import { fetchTasks } from "services/tasks";

const IndexPage = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenNewTaskModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Layout
      title="Task list Application"
      className="p-4 w-full container mx-auto mt-10"
    >
      <Modal
        classes={{ wrapper: " px-4 pt-2 pb-8" }}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <AddTaskForm tasks={tasks} setTasks={setTasks} onSubmit={closeModal} />
      </Modal>
      <section className="max-w-[60rem] mx-auto">
        <h1 className="font-medium text-center text-2xl mb-8">Task List</h1>
        <Button
          onClick={handleOpenNewTaskModal}
          className="w-full bg-purple py-3 rounded-lg hover:bg-purple-dark text-white"
        >
          ADD NEW TASK
        </Button>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </section>
    </Layout>
  );
};
export async function getServerSideProps() {
  const initialTasks = await fetchTasks();

  return { props: { initialTasks } };
}

export default IndexPage;
