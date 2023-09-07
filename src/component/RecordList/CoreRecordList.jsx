import React from "react";
import BoatList from "./Boat/BoatList";
import CardAthleteList from "./Card/CardAthlete_list";


const CoreRecodList = (props) =>{
    let athleteList = props.athleteList;
    let workoutData = props.workoutData

    return (
        <div>
            <CardAthleteList athleteList={athleteList} workoutData={workoutData}></CardAthleteList>
            <BoatList athleteList={athleteList} workoutData={workoutData}></BoatList>
        </div>
    )
}

export default CoreRecodList
