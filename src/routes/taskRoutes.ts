import express from 'express';
import Task from '../models/Task';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.post('/add-task', async (req, res) => {
  try {
    const { name, taskDueDate } = req.body;

    const newTask = new Task({
      id: uuidv4(),
      name,
      createdAt: new Date().toISOString(),
      taskDueDate,
      isCompleted: false,
    });

    await newTask.save();
    res.status(201).json({ message: 'Task created successfully', task: newTask });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
