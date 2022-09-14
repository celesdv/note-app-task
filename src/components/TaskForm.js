import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const TaskForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Form className="p-3 d-flex flex-row" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="m-3 w-50" controlId="title">
        <Form.Control
          type="text"
          placeholder="Add a new Task"
          {...register("title", { required: true, maxLength: 50 })}
        />
        <p className="text-danger">
          {errors.title?.type === "required" && "Task is required"}
        </p>
      </Form.Group>
      <Form.Group className="m-3 w-50" controlId="description">
        <Form.Control
          type="text"
          placeholder="Add a description"
          {...register("description", { required: true, maxLength: 50 })}
        />
        <p className="text-danger">
          {errors.description?.type === "required" && "Task is required"}
        </p>
      </Form.Group>
      <Button variant="primary" type="submit" className="m-3 h-75">
        Add
      </Button>
    </Form>
  );
};

export default TaskForm;
