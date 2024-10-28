const express = require('express');
const Task = require('./models/task'); // Adjust the path as necessary
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all requests
const router = express.Router();

// Endpoint to create a new task
app.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint to retrieve all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /tasks/:id
app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const updatedData = req.body;

  try {
      const [updated] = await Task.update(updatedData, {
          where: { id: taskId }
      });

      if (updated) {
          const updatedTask = await Task.findOne({ where: { id: taskId } });
          return res.status(200).json(updatedTask);
      }

      return res.status(404).send("Task not found");
  } catch (error) {
    console.log(error);
    
      return res.status(500).json({ error: error.message });
  }
});

// DELETE /tasks/:id
app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
      const deleted = await Task.destroy({
          where: { id: taskId }
      });

      if (deleted) {
          return res.status(204).send("Task deleted successfully");
      }

      return res.status(404).send("Task not found");
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

