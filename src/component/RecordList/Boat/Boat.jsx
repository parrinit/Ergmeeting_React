import React from "react";

const Boat = (props) => {
  var x = (props.px || 0)
  var styles = {
    transform: `translate(${x}px)`
  };
  return <div className="boatStyle" style={styles}></div>;
};

export default Boat;
