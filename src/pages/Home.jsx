import React, { useState,useEffect,useTransition } from "react";
import Header from "../component/Header";
import CoreRecodList from "../component/RecordList/CoreRecordList";




const HomePage = (props) => {
  return (
    <div>
      <Header name="Title">fdsfs</Header>
      {/* <CardAthleteList athleteList={athleteOBJArray} workoutData={getWorkoutDataObj}></CardAthleteList>
      <BoatList athleteList={athleteOBJArray} workoutData={getWorkoutDataObj}></BoatList> */}
      <CoreRecodList></CoreRecodList>
    </div>
  );
};


export default HomePage;
