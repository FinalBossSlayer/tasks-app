export default function Info({ onSetInfoOpen }) {
  const levelLevels = [
    {
      Lvl: "Lvl 1",
      XP: "0 - 450 XP",
      color: "lightgray",
    },
    {
      Lvl: "Lvl 2",
      XP: "450 - 550 XP",
      color: "#ffe34c",
    },
    {
      Lvl: "Lvl 3",
      XP: "550 - 750 XP",
      color: "lightgreen",
    },
    {
      Lvl: "Lvl 4",
      XP: "750 - 900 XP",
      color: "lightblue",
    },
    {
      Lvl: "Lvl 5",
      XP: "900 - 1000 XP",
      color: "#db57ff",
    },
  ];

  const levelLvlStyle = {
    padding: "3px 4px",
    color: "white",
    borderRadius: "5px",
    width: "fit-content",
    boxShadow: "2px 3px 4px -2px rgba(19, 19, 19, 0.6)",
  };

  const levelXpStle = {
    backgroundColor: "lightgray",
    padding: "7px 8px",
    borderRadius: "15px",
    fontWeight: "500",
    fontSize: "small",
    width: "fit-content",
  };

  const levelContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(5px)",
    position: "fixed",
    top: "0",
    left: "0",
  };

  const levelDivBorderRadius = "10px";

  const levelDivStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40vw",
    height: "87vh",
    backgroundColor: "white",
    borderRadius: levelDivBorderRadius,
  };

  const levelTitleStyle = {
    width: "stretch",
    background:
      "linear-gradient(90deg,rgba(79, 70, 229, 1) 100%, rgba(99, 102, 241, 1) 0%)",
    borderRadius: `${levelDivBorderRadius} ${levelDivBorderRadius} 0 0`,
    display: "flex",
    color: "white",
    padding: "0 10px",
    border: "1px solid white",
  };

  const levelUlstyle = {
    listStyle: "none",
    width: "stretch",
    margin: "0",
    padding: "15px",
    textAlign: "center",
  };

  const levelLiStyle = {
    display: "flex",
    backgroundColor: "#e5e6e7",
    margin: "10px 0",
    padding: "10px 10px",
    borderRadius: "10px",
  };

  function handleChildClick(e) {
    e.stopPropagation();
  }

  return (
    <div
      onClick={() => onSetInfoOpen((info) => !info)}
      style={levelContainerStyle}
    >
      <div onClick={handleChildClick} style={levelDivStyle}>
        <div style={levelTitleStyle}>
          <div style={{ display: "flex", width: "100%" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "auto", color: "gold", marginRight: "10px" }}
              viewBox="0 -960 960 960"
              width="10%"
              fill="currentColor"
            >
              <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm285 93q35-35 35-85v-240H360v240q0 50 35 85t85 35q50 0 85-35Zm115-93q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
            </svg>
            <h3>XP Level System</h3>
          </div>
          <button
            onClick={() => onSetInfoOpen((info) => !info)}
            style={{
              background: "none",
              border: "0",
              fontSize: "xx-large",
              color: "whitesmoke",
            }}
          >
            &times;
          </button>
        </div>
        <ul style={levelUlstyle}>
          {levelLevels.map((level) => (
            <li style={levelLiStyle} key={level.Lvl}>
              <div style={{ width: "stretch" }}>
                <p style={{ backgroundColor: level.color, ...levelLvlStyle }}>
                  {level.Lvl}
                </p>
              </div>
              <div
                style={{
                  width: "stretch",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <p style={levelXpStle}>{level.XP}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
