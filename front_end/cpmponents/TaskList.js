// import useTaskStore from '../store/taskStore';

// const TaskList = () => {
//   const tasks = useTaskStore((state) => state.tasks);
//   const deleteTask = useTaskStore((state) => state.deleteTask);

//   return (
//     <div>
//       {tasks.map((task) => (
//         <div key={task.id} className="task-item">
//           <h3>{task.title}</h3>
//           <p>{task.description}</p>
//           <button onClick={() => deleteTask(task.id)} className="button">
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskList;


import { useState } from 'react';
import useTaskStore from '../store/taskStore';

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const fetchTasks = useTaskStore((state) => state.fetchTasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const [showTasks, setShowTasks] = useState(false);

  const handleShowTasks = async () => {
    await fetchTasks(); // Fetch tasks from backend
    setShowTasks(true);  // Display tasks
  };

  return (
    <div className="task-list-container">
      <button onClick={handleShowTasks} className="button show-tasks-btn">
        View Tasks
      </button>

      {showTasks && (
        <table className="task-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Recurrence</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task.id} className="task-item">
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.recurrence}</td>
                  <td>{task.start_date}</td>
                  <td>{task.end_date}</td>
                  <td>
                    <button onClick={() => deleteTask(task.id)} className="button delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No tasks available.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
