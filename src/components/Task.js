import Button from "react-bootstrap/Button";
import { BsCheckLg, BsXLg, BsExclamationLg } from "react-icons/bs";
import "../styles/Task.css";

const Task = ({
  id,
  title,
  description,
  completed,
  completeTask,
  deleteTask,
}) => {
  return (
    <div
      className={
        completed
          ? "bg-secondary opacity-50 d-flex p-2 m-2 border rounded shadow "
          : "d-flex p-2 m-2 border rounded shadow "
      }
    >
      <Button
        variant={completed ? "dark" : "success"}
        className="m-2 shadow"
        onClick={() => completeTask(id)}
      >
        {completed ? <BsCheckLg /> : <BsExclamationLg />}
      </Button>
      <div
        className={
          completed
            ? "cross-out w-100 align-self-center pt-2"
            : "w-100 align-self-center pt-2"
        }
      >
        <h3 className={completed ? "text-light" : "text-primary"}>{title}</h3>
        <span
          className={
            completed ? "badge bg-dark text-wrap" : "badge bg-primary text-wrap"
          }
        >
          ID: {id}
        </span>
        <p>{description}</p>
      </div>
      <Button
        variant={completed ? "dark" : "danger"}
        className="m-2 shadow"
        onClick={() => deleteTask(id)}
      >
        <BsXLg />
      </Button>
    </div>
  );
};

export default Task;
