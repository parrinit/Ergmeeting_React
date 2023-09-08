import React, { useState,useEffect,useTransition } from "react";
import BoatList from "./Boat/BoatList";
import CardAthleteList from "./Card/CardAthlete_list";
import * as athleteList from "./../../assets/jsonTest/athleteListRecord.json";
import * as getWorkoutData from "./../../assets/jsonTest/getWorkoutData.json";
import environment from "../../environment/environment";


const CoreRecodList = (props) =>{
    const [athleteOBJArray,setathleteOBJArray]=useState(athleteList.default);
    const [getWorkoutDataObj,setgetWorkoutDataObj] = useState(getWorkoutData);
    //INFO useTransition is a React Hook that lets you update the state without blocking the UI.
    const [isPending, startTransition] = useTransition();
    const [intervallLoop,setintervallLoop]=useState();

    //usare per cambaire le bande
    const [rangeMin,setRangeMin] = useState(0);
    const [rangeMax,setRangeMax] = useState(3000);
  
  
    function setDistanceTest(distance = 10){
      startTransition(()=>{
        //INFO usare deep Copy
        let tempathleteOBJArray = [...athleteOBJArray];
        tempathleteOBJArray.forEach(element => {
          element.distance = parseInt(element.distance) + distance;
          if(element.distance > getWorkoutDataObj.Workout){
             element.distance = parseInt(getWorkoutDataObj.Workout);
          }

          if(element.distance > rangeMax){
            var diffRange = element.distance - rangeMax;
            setRangeDiff(diffRange);
          }
        });
        setathleteOBJArray(tempathleteOBJArray);
      })
    }

    const setRangeDiff = (diff) => {
      setRangeMax(rangeMax + diff);
      setRangeMin(rangeMin + diff);
    }
  
  
    function launchLoopTest(){
        if(!intervallLoop){
            setintervallLoop(setInterval(() => {
                setDistanceTest(50);
            }, 1000));
      
        }
    }
  
    function stopLoopTest(){
        if(environment.isDebug){
            console.log(intervallLoop);
        }
        clearInterval(intervallLoop);
        setintervallLoop(null);
    }
  
    function setDistanceTestById(id,distance){
      let tempathleteOBJArray = [...athleteOBJArray];
      let indexOfList =  tempathleteOBJArray.findIndex((x)=> {return x.ID == id});
      if(indexOfList > -1){
        tempathleteOBJArray[indexOfList].distance += distance;
      }
      setathleteOBJArray(tempathleteOBJArray);
    }
  
    var buttonList = athleteOBJArray.map((obj,index)=>{
      return <button onClick={()=>setDistanceTestById(obj.ID,20)} key={index}>{obj.name}</button>
    })

    return (
        <div>
            <button onClick={()=>setDistanceTest()}>TEST</button>
            <button onClick={()=>launchLoopTest()}>launchLoopTest</button>
            <button onClick={()=>stopLoopTest()}>stopLoopTest</button>
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
            {buttonList}
            <BoatList athleteList={athleteOBJArray} workoutData={getWorkoutDataObj} rangeMin={rangeMin} rangeMax={rangeMax}></BoatList>
            <CardAthleteList athleteList={athleteOBJArray} workoutData={getWorkoutDataObj}></CardAthleteList>
        </div>
    )
}

export default CoreRecodList
