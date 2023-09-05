import React, { useState } from "react";
import Header from "../component/Header";
import BoatRow from "../component/BoatRow";
import BoatList from "../component/BoatList";
import CardAthleteList from "../component/CardAthlete_list";
import * as athleteList from "../assets/jsonTest/athleteListRecord.json";
import * as getWorkoutData from "../assets/jsonTest/getWorkoutData.json";




const HomePage = (props) => {
  const [athleteOBJArray,setathleteOBJArray]=useState(athleteList);
  const [getWorkoutDataObj,setgetWorkoutDataObj] = useState(getWorkoutData);

  function setDistanceTest(distance = 10){
    let tempathleteOBJArray = athleteOBJArray.default || athleteOBJArray
    tempathleteOBJArray.forEach(element => {
      element.distance = parseInt(element.distance) + 10;
      if(element.distance > getWorkoutDataObj.Workout){
         element.distance = parseInt(getWorkoutDataObj.Workout);
      }
    });
    console.log("tempathleteOBJArray",tempathleteOBJArray);
      setathleteOBJArray((prev) => tempathleteOBJArray);
  }


  return (
    <div>
      <Header name="Title">fdsfs</Header>
      <button onClick={()=>setDistanceTest()}>TEST</button>
      <CardAthleteList objs={athleteOBJArray.default || athleteOBJArray}></CardAthleteList>
      <BoatList athleteList={athleteOBJArray.default || athleteOBJArray} workoutData={getWorkoutDataObj}></BoatList>
    </div>
  );
};


export default HomePage;
