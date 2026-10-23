export default function MenuButton({ menu, onSetMenu }) {
  const menuContainerStyle = {
    display: "flex",
    padding: "15px",
    margin: "5px",
    backgroundColor: "white",
    border: "1px solid lightgray",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.2) 2px 3px 4px -2px",
  };

  const menuButtonStyle = {
    border: "none",
    backgroundColor: "transparent",
    color: "gray",
    fontSize: "x-small",
  };

  const menuButtonDivStyle = {
    width: "stretch",
    textAlign: "center",
  };

  const menuButtenPStyle = { width: "max-content" };

  return (
    <div style={menuContainerStyle}>
      {/* btn Tasks */}
      <div style={menuButtonDivStyle}>
        <button
          style={
            menu === "Tasks"
              ? { ...menuButtonStyle, color: "#6366f1" }
              : menuButtonStyle
          }
          className="menuButtonStyle"
          onClick={() => onSetMenu("Tasks")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "auto" }}
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m424-318 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm301.5-598.5Q510-807 510-820t-8.5-21.5Q493-850 480-850t-21.5 8.5Q450-833 450-820t8.5 21.5Q467-790 480-790t21.5-8.5ZM200-200v-560 560Z" />
          </svg>
          <p style={menuButtenPStyle}>Today Tasks</p>
        </button>
      </div>
      {/* btn Calendar */}
      <div style={menuButtonDivStyle}>
        <button
          style={
            menu === "Calendar"
              ? { ...menuButtonStyle, color: "#6366f1" }
              : menuButtonStyle
          }
          onClick={() => onSetMenu("Calendar")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "auto" }}
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
          </svg>
          <p style={menuButtenPStyle}>Streak Calendar</p>
        </button>
      </div>
      {/* btn Task Manager */}
      <div style={menuButtonDivStyle}>
        <button
          style={
            menu === "TaskManager"
              ? { ...menuButtonStyle, color: "#6366f1" }
              : menuButtonStyle
          }
          onClick={() => onSetMenu("TaskManager")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "auto" }}
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm163 450 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
          </svg>
          <p style={menuButtenPStyle}>Task Manager</p>
        </button>
      </div>
    </div>
  );
}
