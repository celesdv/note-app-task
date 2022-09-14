import TaskForm from "./TaskForm"
import Task from "./Task"

const TaskList = () => {
    return (
        <div className="text-bg-success p-3">
            <TaskForm />
            <Task />
        </div>
    )
}

export default TaskList;