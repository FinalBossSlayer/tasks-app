import { Fragment, useState } from "react";

export default function TaskFormItem({
  taskName,
  taskPoints,
  completed,
  id,
  onSetTaskList,
}) {
  const [editFormItem, setEditFormItem] = useState(false);
  const [newTaskName, setNewTaskName] = useState(taskName);
  const [newTaskPoints, setNewTaskPoints] = useState(taskPoints);

  const formTaskStyle = {
    border: "1.5px solid lightgray",
    borderRadius: "5px",
    padding: "15px",
    margin: "5px 0",
    backgroundColor: "rgb(247, 247, 247)",
    boxShadow: "inset #0000001a 1px 2px 3px -2px",
    display: "flex",
    alignItems: "center",
  };

  const formCheckboxStyle = {
    appearence: "none",
    border: "1px solid gray",
    width: "17px",
    height: "16px",
    backgroundColor: "white",
    borderRadius: "3px",
  };

  const formLabelDivStyle = {
    paddingLeft: "10px",
    display: "flex",
    flexDirection: "column",
    width: "stretch",
  };

  const formPointsLabelStyle = {
    backgroundColor: "lightgreen",
    color: "green",
    width: "fit-content",
    fontSize: "x-small",
    borderRadius: "7px",
    padding: "2px",
  };

  const formItemDeleteStyle = {
    border: "none",
    width: "34px",
  };

  const formItemEditStyle = {
    border: "none",
    width: "34px",
  };

  const editButtonSaveStyle = {
    border: "none",
    width: "34px",
  };

  const editButtonCancelStyle = {
    border: "none",
    width: "34px",
    fontSize: "medium",
  };

  function handleCompletedList(id) {
    onSetTaskList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function handleFormItemEdit() {
    setEditFormItem(true);
  }

  function handleFormItemEditCancel() {
    setEditFormItem(false);
  }

  function handleNewItemSubmit(e) {
    e.preventDefault();

    if (!newTaskName || !newTaskPoints) return;

    onSetTaskList((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, taskName: newTaskName, taskPoints: newTaskPoints }
          : item,
      ),
    );

    console.log("edit");
    setEditFormItem(false);
  }

  function handleFormItemDelete() {
    onSetTaskList((items) => items.filter((item) => item.id !== id));
  }

  return (
    <form onSubmit={handleNewItemSubmit} style={formTaskStyle}>
      {!editFormItem ? (
        <Fragment key="view">
          {!completed ? (
            <input
              style={formCheckboxStyle}
              type="checkbox"
              checked={completed}
              onChange={() => handleCompletedList(id)}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="lightgreen"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
            </svg>
          )}
          <div style={formLabelDivStyle}>
            {!completed ? (
              <>
                <label>{taskName}</label>
                <label style={formPointsLabelStyle}>+ {taskPoints} XP</label>
              </>
            ) : (
              <>
                <label
                  style={{ color: "gray", textDecoration: "line-through" }}
                >
                  {taskName}
                </label>
                <label
                  style={{
                    ...formPointsLabelStyle,
                    backgroundColor: "lightgray",
                    color: "gray",
                  }}
                >
                  + {taskPoints} XP
                </label>
              </>
            )}
          </div>
          {completed || (
            <>
              <button
                style={formItemEditStyle}
                className="formItemEditStyle"
                type="button"
                onClick={handleFormItemEdit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "auto" }}
                  viewBox="0 -960 960 960"
                  width="100%"
                  fill="currentColor"
                >
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>
              </button>
              <button
                onClick={handleFormItemDelete}
                className="formItemDelete"
                style={formItemDeleteStyle}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "auto" }}
                  viewBox="0 -960 960 960"
                  width="100%"
                  fill="currentColor"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </>
          )}
        </Fragment>
      ) : (
        <Fragment key="edit">
          <input
            className="editInputStyle"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <input
            style={{ margin: "0 10px" }}
            className="editInputStyle"
            value={newTaskPoints}
            type="number"
            min="0"
            onChange={(e) => setNewTaskPoints(Number(e.target.value))}
          />
          <button
            type="submit"
            style={editButtonSaveStyle}
            className="editButtonSaveStyle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "auto" }}
              viewBox="0 -960 960 960"
              width="100%"
              fill="currentColor"
            >
              <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM565-275q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleFormItemEditCancel}
            style={editButtonCancelStyle}
            className="editButtonCancelStyle"
          >
            X
          </button>
        </Fragment>
      )}
    </form>
  );
}
