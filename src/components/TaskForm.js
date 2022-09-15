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
    <Form className="d-flex flex-row" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="w-50 me-1" controlId="title">
        <Form.Control
          type="text"
          placeholder="Add a new Task"
          {...register("title", { required: true, maxLength: 50 })}
        />
        <p className="text-danger">
          {errors.title?.type === "required" && "Task is required"}
        </p>
      </Form.Group>
      <Form.Group className="w-50 me-1" controlId="description">
        <Form.Control
          type="text"
          placeholder="Add a description"
          {...register("description", { required: true, maxLength: 50 })}
        />
        <p className="text-danger">
          {errors.description?.type === "required" && "Description is required"}
        </p>
      </Form.Group>
      <Button variant="light" type="submit" className="h-75">
        <img
          srcSet="https://cdn-icons-png.flaticon.com/512/463/463569.png"
          alt="icon"
          width="30"
          height="30"
          className="shadow rounded-circle align-self-center"
        />
      </Button>
    </Form>
  );
};

export default TaskForm;
