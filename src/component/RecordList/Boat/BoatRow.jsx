import React, { useEffect } from "react";
import Boat from "./Boat";

const BoatRow = (props) => {
  


  useEffect(()=>{
    console.log("useEffectBoatRow")
  })
  var width = props.width
  //TODO passare range distanza es 1000m-3000m e distanza attuale, se minore di min-range px = 0
  var objRecord = props.objRecord;
  var workoutData = props.workoutData
  var rangeMn = props.rangeMn;
  var rangeMx = props.rangeMx;
  var distance = objRecord.distance;
  var px = 0;
  var unitPxDistance =  props.unitPxDistance ;


  if (distance => rangeMn) {
    var distanceTempPx = distance - rangeMn;
    px = distanceTempPx * unitPxDistance;
  }

  if (distance >= rangeMx) {
    px = width;
  }

  return (
    <div className="boatRowStyle">
      <Boat px={px}></Boat>
    </div>
  );
};

export default BoatRow;
