import React, { useRef } from "react";
import "./Wrapper.css";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";

const Wrapper = ({ children, position }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
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
