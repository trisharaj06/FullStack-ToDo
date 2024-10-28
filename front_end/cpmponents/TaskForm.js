import { useState } from 'react';
import useTaskStore from '../store/taskStore';
import '../styles/globals.css';

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [recurrence, setRecurrence] = useState('daily'); // Default value, adjust as needed
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, recurrence, start_date: startDate, end_date: endDate };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setRecurrence('daily');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
         <h2 className="text-lg font-bold">Add New Task</h2>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input w-full"
        required
      />
      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input w-full"
        required
      />
      <select
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="input"
        required
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <input
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="input"
        required
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="input"
      />
      <button type="submit" className="button bg-green-500 text-white w-full py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
