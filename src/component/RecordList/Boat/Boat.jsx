import React from "react";

const Boat = (props) => {
  var x = (props.px || 0) - 30;
  var styles = {
    transform: `translate(${x}px)`
  };
  return (
    <div>
      <div className="boatLabelStyle" style={styles}>{props.distance}</div>
      <div className="boatName" style={styles}>{props.name}</div>
      <div className="boatStyle" style={styles}></div>
    </div>
  );
};

export default Boat;
