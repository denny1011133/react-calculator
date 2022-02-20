import React from "react";
import "./Wrapper.css";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";

const Wrapper = ({ children, position }) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.WRAPPER,
    item: { position },
  }));

  return (
    <div ref={drag} className="wrapper">
      {children}
    </div>
  );
};

export default Wrapper;
