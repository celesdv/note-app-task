import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Terminar Diseño", description: "Elegir colores para el header", completed: false },
    { id: 2, title: "Subir repositorio", description: "subir cambios al repositorio remoto", completed: true },
  ]);

  return (
    <div className="p-3">
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
