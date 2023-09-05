import React from "react";
import BoatRow from "./BoatRow";

const BoatList = (props) => {
    var athleteList = props.athleteList;
    var workoutData= props.workoutData


    return(
        <BoatRow obj={athleteList[0]}></BoatRow>
    )
}

export default BoatList
