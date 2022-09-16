import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.title.trim()){
      task.title = task.title.trim();
      const updateTask = [task, ...tasks];
      setTasks(updateTask);
    }
  }

  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
  }

  const completeTask = (id) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
    setTasks(updateTask);
  }

  return (
    <div className="p-3">
      <TaskForm saveTask={addTask}/>
      <div>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
