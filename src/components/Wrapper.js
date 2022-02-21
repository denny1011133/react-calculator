import React from "react";
import "./Wrapper.css";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";

const Wrapper = ({ children, left, top }) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.WRAPPER,
    item: { left, top },// drag initial coordinate to drop target
  }), [left, top]);

  return (
    <div ref={drag} style={{ left, top }} className="wrapper">
      {children}
    </div>
  );
};

export default Wrapper;
