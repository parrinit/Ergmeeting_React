import React from "react";

const Boat = (props) => {
  const x = 1000;
  var styles = {
    transform: `translate(${x}px)`
  };
  return <div className="boatStyle" style={styles}></div>;
};

export default Boat;
