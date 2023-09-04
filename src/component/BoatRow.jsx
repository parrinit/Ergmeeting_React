import React from "react";
import Boat from "./Boat";

const BoatRow = (props) => {
  var obj = props.obj;
  console.log("BoatRowObj", obj);
  return (
    <div className="boatRowStyle">
      <Boat></Boat>
    </div>
  );
};

export default BoatRow;
