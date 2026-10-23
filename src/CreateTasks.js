import { useState } from "react";

export default function CreateTasks({ taskList, onSetTaskList }) {
  const [taskName, setTaskName] = useState("");
  const [taskPoints, setTaskPoints] = useState("");
  const [taskFormOpen, setTaskFormOpen] = useState(false);

  const addTaskButtonStyle = {
    border: "0",
    borderRadius: "5px",
    padding: "5px 10px",
  };

  const formTaskStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const formInputStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const inputTaskStyle = {
    display: "flex",
    flexDirection: "column",
    width: "stretch",
    margin: "10px 5px",
    fontSize: "smaller",
    color: "gray",
  };

  const createTaskButtonStyle = {
    alignSelf: "end",
    border: "none",
    backgroundColor: "#262933",
    color: "whitesmoke",
    padding: "5px 10px",
    borderRadius: "5px",
  };

  function handleTaskCreate(e) {
    e.preventDefault();

    if (!taskName || !taskPoints) return;

    const curMonth = new Date().getMonth() + 1;
    const curYear = new Date().getFullYear();
    const curDay = new Date().getDate();

    const task = {
      id: new Date(),
      taskName: taskName,
      taskPoints: taskPoints,
      completed: false,
      day: curDay,
      month: curMonth,
      year: curYear,
    };

    onSetTaskList((list) => [task, ...list]);
    setTaskName("");
    setTaskPoints("");
  }

  return (
    <div style={{ margin: "20px 5px" }}>
      <div style={{ display: "flex", justifyContent: "end", margin: "15px 0" }}>
        <button
          style={
            taskFormOpen
              ? {
                  backgroundColor: "lightgray",
                  color: "gray",
                  ...addTaskButtonStyle,
                }
              : {
                  backgroundColor: "#6366f1",
                  color: "white",
                  ...addTaskButtonStyle,
                }
          }
          onClick={() => setTaskFormOpen((e) => !e)}
        >
          {taskFormOpen ? "X Close" : "+ Add Task"}
        </button>
      </div>
      {taskFormOpen && (
        <form style={formTaskStyle} onSubmit={handleTaskCreate}>
          <div style={formInputStyle}>
            <div style={inputTaskStyle}>
              <label>Task Name</label>
              <input
                className="formCreateTaskInputStyle"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div style={inputTaskStyle}>
              <label>Points</label>
              <input
                className="formCreateTaskInputStyle"
                value={taskPoints}
                type="number"
                min="0"
                onChange={(e) => setTaskPoints(Number(e.target.value))}
              />
            </div>
          </div>
          <button style={createTaskButtonStyle}>Create Task</button>
        </form>
      )}
    </div>
  );
}
