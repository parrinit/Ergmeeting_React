import React, { useState } from "react";
import Header from "../component/Header";
import BoatRow from "../component/BoatRow";
import BoatList from "../component/BoatList";
import CardAthleteList from "../component/CardAthlete_list";
import * as athleteLis from "../assets/jsonTest/athleteListRecord.json";
import * as getWorkoutData from "../assets/jsonTest/getWorkoutData.json";




const HomePage = (props) => {
  let athleteOBJArray = athleteLis;
  var getWorkoutDataObj = getWorkoutData
  return (
    <div>
      <Header name="Title">fdsfs</Header>
      <CardAthleteList objs={athleteOBJArray.default}></CardAthleteList>
      <BoatList athleteList={athleteOBJArray} workoutData={getWorkoutDataObj}></BoatList>
    </div>
  );
};

export default HomePage;
