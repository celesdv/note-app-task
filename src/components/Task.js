import {
  MdCheckBoxOutlineBlank,
  MdDeleteForever,
  MdCheckBox,
} from "react-icons/md";
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
    <div className="task">
      <button
        onClick={() => completeTask(id)}
        className={completed ? "bttn bttn-check" : "bttn"}
      >
        {completed ? (
          <MdCheckBox className="iconForm" />
        ) : (
          <MdCheckBoxOutlineBlank className="iconForm" />
        )}
      </button>
      <div className="info">
        <h3 className={completed ? "cross-out" : ""}>{title}</h3>
        <span className={completed ? "badge badge-complete" : "badge"}>
          ID: {id}
        </span>
        <p className={completed ? "cross-out" : ""}>{description}</p>
      </div>
      <button
        onClick={() => deleteTask(id)}
        className={completed ? "bttn bttn-check" : "bttn"}
      >
        <MdDeleteForever className="iconForm" />
      </button>
    </div>
  );
};

export default Task;
