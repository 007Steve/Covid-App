import React from "react";
import "../styles/Circle.css";
import { motion } from "framer-motion";
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
  title,
  name,
  number,
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
    <motion.div
      animate={{ scale: 1 }}
      layout
      whileTap={{ scale: 0.9 }}
      drag
      className="circle"
    >
      <span style={myStyle} class="dot">
        <p className="i">{name}</p>
        <h3 className="i">{number}</h3>
        <p className="i">{title}</p>
      </span>
    </motion.div>
  );
}

export default Circle;
