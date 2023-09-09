import React, { useRef,useState,useEffect } from "react";
import Band from "./Band";
import BoatRow from "./BoatRow";
import environment from "../../../environment/environment";

const BoatList = (props) => {
    //INFO useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    const [windowSize,setWindowSize] = useState({ 
      height: window.innerHeight,
      width: window.innerWidth
    })
  

    //-60 sono 40 mi margin + 20 di larghezza boat
    var width = windowSize.width - 130;
    var athleteList = props.athleteList;
    var workoutData= props.workoutData;
    var rangeMin = props.rangeMin;
    var rangeMax = props.rangeMax;

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth
        })      
        width = windowSize.width - 130;
      }
      window.addEventListener('resize', handleResize)
    })

    var retObj = [];

      function init(){
        retObj = [];
        if (athleteList != null && athleteList.length > 0) {
          retObj = athleteList.map((obj, index) => {
            return (
              <BoatRow key={index} objRecord={obj} workoutData={workoutData} rangeMn={rangeMin} rangeMx={rangeMax} width={width}></BoatRow>
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

        valueCount = Math.ceil(nextBandMeterTemp) * step;
        var indexBand = 0
        while(valueCount <= rangeMax){
          var px = calcDistanceInPX(valueCount,width,rangeMax,rangeMin)
          objBand.push(
            <Band key={indexBand} px ={px} label={valueCount}></Band>
          )
          indexBand++;
          valueCount += step;
        }
      }

      init();
    
      return (<div className="boatListCore">
          {objBand}
          <div className="boatListStyle">{retObj}</div> 
        </div>);

}

const calcDistanceInPX = (distance, width,rangeMax,rangeMin)=>{
  console.log(width)
  var unitPxDistance = width / (rangeMax - rangeMin) ;

  var px = 0   
  if (distance >= rangeMin) {
    var distanceTempPx = distance - rangeMin;
    px = distanceTempPx * unitPxDistance;
  }

  if (distance >= rangeMax) {
    px = width;
  }

  return px
}

export  {BoatList as default ,calcDistanceInPX}
