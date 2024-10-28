import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import useTaskStore from '../store/taskStore';
import '../styles/globals.css';

const Home = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
  
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
