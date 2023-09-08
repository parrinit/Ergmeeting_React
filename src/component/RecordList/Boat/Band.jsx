import React from "react";

const Band = (props) =>{
    let x = props.px + 40
    var styles = {
        transform: `translate(${x}px)`
    };
    return(
        <div>
            <div style={styles} className="bandLabelStyle">{props.label}</div>
            <div style={styles} className="bandStyle"></div>
        </div>
    )
}

export default Band;