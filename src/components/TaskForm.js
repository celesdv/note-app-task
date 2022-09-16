import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsPlusLg } from "react-icons/bs";

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
    <Form className="d-flex flex-row mb-2" onSubmit={handleSubmit}>
      <Form.Group className="w-50 me-1" controlId="title">
        <Form.Control
          type="text"
          placeholder="Add a new Task"
          onChange={handleChangeTitle}
        />
      </Form.Group>
      <Form.Group className="w-50 me-1" controlId="description">
        <Form.Control
          type="text"
          placeholder="Add a description"
          onChange={handleChangeDescription}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        <BsPlusLg />
      </Button>
    </Form>
  );
};

export default TaskForm;
