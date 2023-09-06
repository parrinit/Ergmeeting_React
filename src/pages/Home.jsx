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

  useEffect(()=>{
    console.log("useEffect")
  })

  function setDistanceTest(distance = 10){
    startTransition(()=>{
      let tempathleteOBJArray = athleteOBJArray;
      setathleteOBJArray([])
      tempathleteOBJArray.forEach(element => {
        element.distance = parseInt(element.distance) + 10;
        if(element.distance > getWorkoutDataObj.Workout){
           element.distance = parseInt(getWorkoutDataObj.Workout);
        }
        setathleteOBJArray((prev)=> [...prev,element])
      });
    })
  }

  function setDistanceTestById(){

  }

  return (
    <div>
      <Header name="Title">fdsfs</Header>
      <button onClick={()=>setDistanceTest()}>TEST</button>
      {buttonList}
      <CardAthleteList objs={athleteOBJArray}></CardAthleteList>
      <BoatList athleteList={athleteOBJArray} workoutData={getWorkoutDataObj}></BoatList>
    </div>
  );
};


export default HomePage;
