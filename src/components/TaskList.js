import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "tarea 1", description: "descripcion 1", completed: false },
    { id: 2, title: "tarea 2", description: "descripcion 2", completed: false },
  ]);

  return (
    <div className="text-bg-success p-3">
      <TaskForm />
      <div>
        {
            tasks.map((task) => {
                return (
                    <Task 
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    completed={task.completed}
                    />
                )
            })
        }
      </div>
    </div>
  );
};

export default TaskList;
