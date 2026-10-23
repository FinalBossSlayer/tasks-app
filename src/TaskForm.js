export default function TaskForm({
  heading,
  paragraph,
  bgColor,
  boxShadow,
  children,
}) {
  const formTaskListStyle = {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "2px solid lightgray",
    padding: "15px",
    margin: "0 5px",
    display: "flex",
    flexDirection: "column",
    boxShadow: boxShadow,
  };

  const formTaskListHeaderStyle = {
    margin: "0 0 20px 0",
    borderBottom: "1px solid lightgray",
    display: "flex",
  };

  const headerHeadingStyle = {
    margin: "0",
    display: "flex",
    alignItems: "center",
    width: "stretch",
  };

  const headerDotStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginRight: "10px",
    backgroundColor: bgColor,
  };

  const headerParagraphStyle = {
    margin: "0",
    minWidth: "fit-content",
    textAlign: "end",
    textTransform: "uppercase",
    borderRadius: "20px",
    padding: "5px",
    fontSize: "x-small",
    marginBottom: "5px",
    backgroundColor: bgColor,
  };

  return (
    <div style={formTaskListStyle}>
      <div style={formTaskListHeaderStyle}>
        <h3 style={headerHeadingStyle}>
          <span style={headerDotStyle}></span>
          {heading}
        </h3>
        <p style={headerParagraphStyle}>{paragraph}</p>
      </div>
      {children}
    </div>
  );
}
