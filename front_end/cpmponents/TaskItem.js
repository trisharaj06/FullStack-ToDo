
const TaskItem = ({ task }) => {
  return (
    <div className="p-4 border rounded shadow-sm flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <button className="text-red-500">Delete</button>
    </div>
  );
};

export default TaskItem;
