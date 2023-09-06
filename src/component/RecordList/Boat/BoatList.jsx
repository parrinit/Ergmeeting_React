import React, { useRef } from "react";
import BoatRow from "./BoatRow";

const BoatList = (props) => {
    //INFO useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    //-60 sono 40 mi margin + 20 di larghezza boat
    var width = windowSize.current[0] - 60;

    
    var athleteList = props.athleteList;
    var workoutData= props.workoutData;
    var rangeMin = 0
    var rangeMax = 1000

    var retObj = [];
    if (athleteList != null && athleteList.length > 0) {
        retObj = athleteList.map((obj, index) => {
          return (<div className="">
            <BoatRow objRecord={obj} key={index} workoutData={workoutData} rangeMn={rangeMin} rangeMx={rangeMax} width={width}></BoatRow>
          </div>
          );
        });
      }
    
      return <div className="boatListStyle">{retObj}</div>;

}

export default BoatList
