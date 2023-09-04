import React from "react";

const Header = (props) => {
  return (
    <header className="headerStyle">
      <div className="headerTitle">
        <h2>{props.name}</h2>
      </div>
    </header>
  );
};

export default Header;
