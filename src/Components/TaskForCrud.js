function TaskForCrud(props) {
  return (
      <div className="task"
          style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h2>
        {props.taskName}
        <button onClick={() => props.taskCompleted(props.id)}>Completed</button>

        <button
          // style={{ marginLeft: ".5rem" }}
          onClick={() => props.removeTask(props.id)}
        >
          X
        </button>
      </h2>
    </div>
  );
}

export default TaskForCrud;
