import type { NextApiRequest, NextApiResponse } from "next";

let tasks = [];
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET": {
        res.status(200).json(tasks);
      }
      case "POST":
        const task = req.body;
        tasks.push(task);
        res.status(201).json(task);
      case "DELETE":
        tasks = tasks.filter((task) => task.id !== req.query.id);
        res.status(204).end();
      case "PUT":
        const taskIndex = tasks.findIndex((task) => task.id === req.query.id);
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        res.status(200).json(tasks[taskIndex]);
      default:
        res.status(405).end();
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
