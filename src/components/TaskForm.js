import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/TaskForm.css";
import { MdAdd } from "react-icons/md";

const TaskForm = ({ saveTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false,
    };
    saveTask(newTask);
    e.target.reset();
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h3 className="title">Add Tasks</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputs">
          <input
            className="inputForm"
            type="text"
            placeholder="Add a new Task"
            onChange={handleChangeTitle}
          />
          <input
            className="inputForm"
            type="text"
            placeholder="Add a Description"
            onChange={handleChangeDescription}
          />
        </div>
        <button className="buttonAdd">
          <MdAdd className="iconForm" />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
