import React, { useEffect } from "react";
import Boat from "./Boat";
import { calcDistanceInPX } from "./BoatList";
import environment from "../../../environment/environment";

const BoatRow = (props) => {
  var width = props.width -40
  //TODO passare range distanza es 1000m-3000m e distanza attuale, se minore di min-range px = 0
  var objRecord = props.objRecord;
  var workoutData = props.workoutData
  var rangeMn = props.rangeMn;
  var rangeMx = props.rangeMx;
  var distance = objRecord.distance;
  var px = calcDistanceInPX(distance,width,rangeMx,rangeMn);

  return (
    <div className="boatRowStyle">
      <Boat px={px}></Boat>
    </div>
  );
};

export default BoatRow;
