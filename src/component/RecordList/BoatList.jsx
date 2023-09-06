import React from "react";
import BoatRow from "./BoatRow";

const BoatList = (props) => {
    var athleteList = props.athleteList;
    var workoutData= props.workoutData;
    var rangeMin = 0
    var rangeMax = 1000

    var retObj = [];
    if (athleteList != null && athleteList.length > 0) {
        retObj = athleteList.map((obj, index) => {
          return <BoatRow objRecord={obj} key={index} workoutData={workoutData} rangeMn={rangeMin} rangeMx={rangeMax}></BoatRow>;
        });
      }
    
      return <div className="boatListStyle">{retObj}</div>;

}

export default BoatList
