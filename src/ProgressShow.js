import InfoButton from "./InfoButton";

export default function ProgressShow({ taskList }) {
  // const levelGoals = [450, 550, 750, 900, 1000];
  const levelGoalsColors = [
    "lightgray",
    "#ffe34c",
    "lightgreen",
    "lightblue",
    "#db57ff",
  ];
  const pointsColected = taskList
    .filter((item) => item.completed)
    .reduce((sum, itemPints) => sum + itemPints.taskPoints, 0);

  let indexNum;

  if (pointsColected <= 450) indexNum = 0;
  if (pointsColected >= 450 && pointsColected < 550) indexNum = 1;
  if (pointsColected >= 550 && pointsColected < 750) indexNum = 2;
  if (pointsColected >= 750 && pointsColected < 900) indexNum = 3;
  if (pointsColected >= 900) indexNum = 4;

  const level = indexNum + 1;

  // const precentDone = (pointsColected / levelGoals.at(indexNum)) * 100;

  const progressShowContainerStyle = {
    backgroundColor: levelGoalsColors.at(indexNum),
    display: "flex",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
  };

  const levelShowStyle = {
    width: "stretch",
    alignSelf: "center",
  };

  const levelShowDivStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "whitesmoke",
    display: "flex",
    width: "fit-content",
    padding: "5px 25px 5px 15px",
    fontSize: "smaller",
    borderRadius: "15px",
    fontWeight: "bold",
  };

  const todayPointsStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "whitesmoke",
    display: "flex",
    minWidth: "fit-content",
    borderRadius: "10px",
  };

  return (
    <div style={progressShowContainerStyle}>
      <div style={levelShowStyle}>
        <div style={levelShowDivStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="gold"
          >
            <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm410-350q70-70 70-170t-70-170q-70-70-170-70t-170 70q-70 70-70 170t70 170q70 70 170 70t170-70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
          </svg>
          <p style={{ alignSelf: "center" }}>LEVEL {level}</p>
        </div>
      </div>
      <div style={todayPointsStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "7px",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "smaller", padding: "7px" }}>Today's points</p>
          <p
            style={{
              paddingRight: "7px",
              width: "stretch",
              textAlign: "right",
            }}
          >
            <span style={{ fontSize: "xx-large", color: "white" }}>
              {pointsColected}
            </span>
            <span style={{ fontSize: "smaller", marginLeft: "10px" }}>XP</span>
          </p>
        </div>
        <div style={{ padding: "0 7px 7px 0", alignSelf: "end" }}>
          <InfoButton />
        </div>
      </div>
    </div>
  );
}
