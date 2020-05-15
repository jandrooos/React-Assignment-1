import React from "react";

const userInput = (props) => {
  const inputStyling = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="UserInput" style={inputStyling}>
      <input type="text" onChange={props.changed} value={props.currentName} />
    </div>
  );
};

export default userInput;
