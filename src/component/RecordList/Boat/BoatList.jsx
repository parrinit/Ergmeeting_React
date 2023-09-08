import React, { useRef,useState } from "react";
import Band from "./Band";
import BoatRow from "./BoatRow";

const BoatList = (props) => {
    //INFO useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const [rangeMin,setRangeMin] = useState(20);
    const [rangeMax,setRangeMax] = useState(2999);

    //-60 sono 40 mi margin + 20 di larghezza boat
    var width = windowSize.current[0] - 60;

    var athleteList = props.athleteList;
    var workoutData= props.workoutData;

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
      var objBand = [];

      function getBandArray(){
        var valueCount = 0;
        var step = 500;
        var nextBandMeterTemp = rangeMin / step;
        console.log("nextBandMeterTemp",nextBandMeterTemp);
        valueCount = Math.ceil(nextBandMeterTemp) * step;
        console.log("valueCount",valueCount);
        var indexBand = 0
        while(valueCount <= rangeMax){
          console.log(valueCount);
          var px = 0   
          if (valueCount > rangeMin) {
            var distanceTempPx = valueCount - rangeMin;
            px = distanceTempPx * unitPxDistance;
          }

          if (valueCount > rangeMax) {
            px = width;
          }
          objBand.push(
            <Band key={indexBand} px ={px} label={valueCount}></Band>
          )
          indexBand++;
          valueCount += step;
        }
      }

      function setMinMaxRange(isMin, value){
        if(isMin == true){
          setRangeMin(value);
        }else{
          setRangeMax(value);
        }
        getBandArray();

      }

      init();
    
      return (<div className="boatListCore">
          <div>
            <div>
              <label>MIN</label>
              <input value={rangeMin} onChange={e=>setRangeMin(e.target.value)}></input>
            </div>
            <div>
              <label>MAX</label>
              <input value={rangeMax} onChange={e=>setRangeMax(e.target.value)}></input>
            </div>
          </div>
          {objBand}
          <div className="boatListStyle">{retObj}</div> 
        </div>);

}

export default BoatList
