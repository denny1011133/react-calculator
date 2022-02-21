import React from "react";
import "./Wrapper.css";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";

const Wrapper = ({ children, left, top }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.WRAPPER,
    item: { left, top },// describe the data being dragged. 
  }), [left, top]);

  if (isDragging) {// remove DOM if dragging
    return <div ref={drag} />;
  }
  return (
    <div ref={drag} style={{ left, top }} className="wrapper">
      {children}
    </div>
  );
};

export default Wrapper;
