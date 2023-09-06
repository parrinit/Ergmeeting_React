import React from "react";

const CardAthlete = (props) => {
  let obj = props.obj;
  return (
    <div>
      <table className="tableStyle">
        <tbody>
          <tr>
            <td colSpan="2">{obj.name}</td>
          </tr>
          <tr>
            <td>Time : {obj.time}</td>
            <td>Distance : {obj.distance}</td>
          </tr>
          <tr>
            <td>Stroke : {obj.stroke}</td>
            <td>Avg : {obj.avg} min/500m</td>
          </tr>
          <tr>
            <td>{obj.pace} min/500m</td>
            <td>Serie : {obj.pace}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardAthlete;
