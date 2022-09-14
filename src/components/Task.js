const Task = ({id, title, description, completed}) => {
    return (
        <div className="text-bg-info p-3">            
            <h3>{id} - {title}</h3>
            <p>{description}</p>
            <p>{completed}</p>
        </div>
    )
}

export default Task;