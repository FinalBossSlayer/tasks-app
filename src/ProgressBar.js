export default function ProgressBar({ taskList }) {
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

  const precentDone = (pointsColected / 1000) * 100;

  const progressBarMainContainerStyle = {
    backgroundColor: "white",
    padding: "10px 20px",
    fontSize: "smaller",
  };

  const progressBarDotStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginRight: "10px",
    backgroundColor: levelGoalsColors.at(indexNum),
  };

  const progressBarContainerStyle = {
    backgroundColor: "gray",
    padding: "1px",
    borderRadius: "5px",
  };

  const progressBarStyle = {
    width: `${precentDone}%`,
    height: "7px",
    backgroundColor: levelGoalsColors.at(indexNum),
    borderRadius: "inherit",
  };

  const progressBarInfoContainerStyle = {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
  };

  const pointsColectedStyle = { minWidth: "fit-content" };

  const progressBarLvlStyle = {
    width: "stretch",
  };

  const pointsColected1000Style = { color: "gray" };

  return (
    <div style={progressBarMainContainerStyle}>
      <div style={progressBarInfoContainerStyle}>
        <div style={progressBarDotStyle}></div>
        <p style={progressBarLvlStyle}>Lvl {level}</p>
        <p style={pointsColectedStyle}>
          {pointsColected}
          <span style={pointsColected1000Style}> / 1000</span>
        </p>
      </div>
      {/* this div is the progress bar */}
      <div style={progressBarContainerStyle}>
        <div style={progressBarStyle}></div>
      </div>
    </div>
  );
}
