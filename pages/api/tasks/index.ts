import type { NextApiRequest, NextApiResponse } from "next";

let tasks = [];
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      res.status(200).json(tasks);
    } else if (req.method === "POST") {
      const task = req.body;
      tasks.push(task);
      res.status(201).json(task);
    } else if (req.method === "DELETE") {
      const taskId = req.query.id;
      tasks = tasks.filter((task) => task.id !== taskId);
      res.status(204).end();
    } else if (req.method === "PUT") {
      const taskId = req.query.id;
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      res.status(200).json(tasks[taskIndex]);
    } else {
      res.status(405).end();
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
