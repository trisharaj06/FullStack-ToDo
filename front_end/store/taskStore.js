import axios from 'axios';
import { create } from 'zustand';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend server URL
});

const useTaskStore = create((set) => ({
  tasks: [],
  fetchTasks: async () => {
    try {
      const response = await api.get('/tasks');
      set({ tasks: response.data });
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  },
  addTask: async (task) => {
    try {
      const response = await api.post('/tasks', task);
      set((state) => ({ tasks: [...state.tasks, response.data] }));
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  },
  updateTask: async (id, updatedTask) => {
    try {
      const response = await api.put(`/tasks/${id}`, updatedTask);
      set((state) => ({
        tasks: state.tasks.map((task) => (task.id === id ? response.data : task)),
      }));
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  },
  deleteTask: async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  },
}));

export default useTaskStore;
