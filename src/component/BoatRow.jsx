import React, { useRef } from "react";
import Boat from "./Boat";

const BoatRow = (props) => {
  //INFO useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  //-60 sono 40 mi margin + 20 di larghezza boat
  const width = windowSize.current[0] - 60;

  //TODO passare range distanza es 1000m-3000m e distanza attuale, se minore di min-range px = 0
  var objRecord = props.objRecord;
  var workoutData = props.workoutData
  var rangeMn = props.rangeMn;
  var rangeMx = props.rangeMx;
  var distance = objRecord.distance;
  var px = 0;
  var unitPxDistance = width / (rangeMx - rangeMn) ;


  if (distance > rangeMn) {
    var distanceTempPx = distance - rangeMn;
    px = distanceTempPx * unitPxDistance;
  }

  if (distance > rangeMx) {
    px = width;
  }

  return (
    <div className="boatRowStyle">
      <Boat px={px}></Boat>
    </div>
  );
};

export default BoatRow;
