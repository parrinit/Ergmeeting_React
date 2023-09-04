import React, { useState } from "react";
import CardAthleteList from "../component/CardAthlete_list";
import * as res from "../assets/jsonTest/athleteListRecord.json";

import Header from "../component/Header";
import BoatRow from "../component/BoatRow";

const HomePage = (props) => {
  let athleteOBJArray = res;
  return (
    <div>
      <Header name="Title">fdsfs</Header>
      <CardAthleteList objs={athleteOBJArray.default}></CardAthleteList>
      <BoatRow obj={athleteOBJArray[0]}></BoatRow>
    </div>
  );
};

export default HomePage;
