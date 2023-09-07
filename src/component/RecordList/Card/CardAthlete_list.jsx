import React from "react";
import CardAthlete from "./CardAthlete";

const CartAthleteList = (props) => {
  var objArray = props.athleteList;

  var retObj = [];
  if (objArray != null && objArray.length > 0) {
    retObj = objArray.map((obj, index) => {
      return <CardAthlete obj={obj} key={index}></CardAthlete>;
    });
  }

  return retObj;
};

export default CartAthleteList;
