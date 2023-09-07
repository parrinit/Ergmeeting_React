import React from "react";

const Band = (props) =>{

    let x = props.px
    var styles = {
        transform: `translate(${x}px)`
    };
    return(
        <div style={styles} className="bandStyle"></div>
    )
}

export default Band;