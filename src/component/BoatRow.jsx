import React, { useRef } from "react";
import Boat from "./Boat";

const BoatRow = (props) => {
  //INFO useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const width = windowSize.current[0] - 20;

  //TODO passare range distanza es 1000m-3000m e distanza attuale, se minore di min-range px = 0
  var rangeMn = props.rangeMn;
  var rangeMx = props.rangeMx;
  var distance = props.distance;
  var px = 0;
  var unitPxDistance = (rangeMx - rangeMn) / width;

  if (distance > rangeMn) {
    var distanceTempPx = distance - rangeMn;
    px = distanceTempPx * unitPxDistance;
  }

  if (distance > rangeMx) {
    px = width;
  }

  var obj = props.obj;
  console.log(width);
  console.log("BoatRowObj", obj);
  return (
    <div className="boatRowStyle">
      <Boat px={px}></Boat>
    </div>
  );
};

export default BoatRow;
