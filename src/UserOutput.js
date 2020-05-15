import React, { Comment } from "react";
import "./UserInput";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p onClick={props.click}>Welcome to my website {props.name}.</p>
      <p>Please come back to see us {props.name}.</p>
    </div>
  );
};

export default userOutput;
