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
          ? "completed d-flex p-2 border border-secondary rounded mb-2"
          : "d-flex p-2 border border-secondary rounded mb-2"
      }
    >
      <Button
        variant="success"
        className="m-2"
        onClick={() => completeTask(id)}
      >
        {completed ? <BsCheckLg /> : <BsExclamationLg />}
      </Button>
      <div className="w-100 align-self-center pt-2">
        <div className={completed ? "cross-out" : ""}>
          <h3 className="text-primary">{title}</h3>
          <span className="badge bg-primary text-wrap">ID: {id}</span>
          <p>{description}</p>
        </div>
      </div>
      <Button
        variant="danger"
        className="m-2"
        onClick={() => deleteTask(id)}
      >
        <BsXLg />
      </Button>
    </div>
  );
};

export default Task;
