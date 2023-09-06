import React, { useState,useEffect,useTransition } from "react";
import Header from "../component/Header";
import BoatList from "../component/RecordList/BoatList";
import CardAthleteList from "../component/RecordList/CardAthlete_list";
import * as athleteList from "../assets/jsonTest/athleteListRecord.json";
import * as getWorkoutData from "../assets/jsonTest/getWorkoutData.json";




const HomePage = (props) => {
  const [athleteOBJArray,setathleteOBJArray]=useState(athleteList.default);
  const [getWorkoutDataObj,setgetWorkoutDataObj] = useState(getWorkoutData);
  //INFO useTransition is a React Hook that lets you update the state without blocking the UI.
  const [isPending, startTransition] = useTransition();
  const [intervallLoop,setintervallLoop]=useState();


  function setDistanceTest(distance = 10){
    startTransition(()=>{
      //INFO usare deep Copy
      let tempathleteOBJArray = [...athleteOBJArray];
      tempathleteOBJArray.forEach(element => {
        element.distance = parseInt(element.distance) + 10;
        if(element.distance > getWorkoutDataObj.Workout){
           element.distance = parseInt(getWorkoutDataObj.Workout);
        }
      });
      setathleteOBJArray(tempathleteOBJArray);
    })
  }


  function launchLoopTest(){
    setintervallLoop(setInterval(() => {
      setDistanceTest(5)
    }, 1000));

  }

  function stopLoopTest(){
    clearInterval(intervallLoop)
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
      <Header name="Title">fdsfs</Header>
      <button onClick={()=>setDistanceTest()}>TEST</button>
      <button onClick={()=>launchLoopTest()}>launchLoopTest</button>
      <button onClick={()=>stopLoopTest()}>stopLoopTest</button>
      {buttonList}
      <CardAthleteList objs={athleteOBJArray}></CardAthleteList>
      <BoatList athleteList={athleteOBJArray} workoutData={getWorkoutDataObj}></BoatList>
    </div>
  );
};


export default HomePage;
