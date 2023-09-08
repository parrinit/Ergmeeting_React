import React, { useRef } from "react";
import Band from "./Band";
import BoatRow from "./BoatRow";

const BoatList = (props) => {
    //INFO useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    //-60 sono 40 mi margin + 20 di larghezza boat
    var width = windowSize.current[0] - 60;

    var athleteList = props.athleteList;
    var workoutData= props.workoutData;
    var rangeMin = 499;
    var rangeMax = 2999;

    var unitPxDistance = width / (rangeMax - rangeMin) ;


    var retObj = [];

      function init(){
        retObj = [];
        if (athleteList != null && athleteList.length > 0) {
          retObj = athleteList.map((obj, index) => {
            return (
              <BoatRow key={index} objRecord={obj} workoutData={workoutData} rangeMn={rangeMin} rangeMx={rangeMax} width={width} unitPxDistance={unitPxDistance}></BoatRow>
            );
          });
        }
        getBandArray();
      }

      function getBandArray(){
        var valueCount = 0;
        var step = 500;
        var nextBandMeterTemp = rangeMin / step;
        console.log("nextBandMeterTemp",nextBandMeterTemp);
        valueCount = Math.ceil(nextBandMeterTemp) * step;
        console.log("valueCount",valueCount);
        var objBand = [];
        while(valueCount <= (rangeMax-step)){
          valueCount += step;
          console.log(valueCount);
          var px = 0   
          if (distance > rangeMn) {
            var distanceTempPx = valueCount - rangeMn;
            px = distanceTempPx * unitPxDistance;
          }

          if (distance > rangeMx) {
            px = width;
          }
          objBand.push(
            <Band px ={px} ></Band>
          )
        }
      }

      init();
    
      return (<div className="boatListCore">
          {/* Qui aggiungere le bande */}
          <Band px={20}></Band>
          <div className="boatListStyle">{retObj}</div> 
        </div>);

}

export default BoatList
