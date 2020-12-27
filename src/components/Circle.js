import React from "react";
import "../styles/Circle.css";
function Circle({
  height,
  width,
  colorOne,
  colorTwo,
  position,
  top,
  left,
  right,
  bottom,
}) {
  const myStyle = {
    height: `${height}`,
    width: `${width}`,
    backgroundColor: `#${colorOne}`,
    backgroundImage: `linear-gradient(62deg, #${colorTwo} 0%, #${colorOne}100%)`,

    // background: `radial-gradient(#${colorOne} ,#${colorTwo})`,
    boxShadow: `13px 13px 53px 1px #${colorOne}`,
    position: `${position}`,
    top: `${top}`,
    left: `${left}`,
    right: `${right}`,
    bottom: `${bottom}`,
  };
  return (
    <div className="circle">
      <span style={myStyle} class="dot">
          <p className="i">Albania</p>
          <h3 className="i">23232</h3>
          <p className="i">case</p>
      </span>
    </div>
  );
}

export default Circle;
