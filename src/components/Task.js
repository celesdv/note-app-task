const Task = ({ id, title, description, completed }) => {
  return (
    <div className="d-flex p-2 border border-secondary rounded mb-2">
      <img
        srcSet="https://cdn-icons-png.flaticon.com/512/463/463574.png"
        alt="icon"
        width="30"
        height="30"
        className="shadow rounded-circle m-3 align-self-center"
      />
      <div className="w-100 align-self-center pt-2">
        <h3>
          <span>{id}</span> - {title}
        </h3>
        <p>{description}</p>
      </div>
      <img
        srcSet="https://cdn-icons-png.flaticon.com/512/463/463612.png"
        alt="icon"
        width="30"
        height="30"
        className="shadow rounded-circle m-3 align-self-center"
      />
    </div>
  );
};

export default Task;
