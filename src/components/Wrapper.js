import React from "react";
import "./Wrapper.css";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";

const Wrapper = ({ children, left, top, hideSourceOnDrag }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.WRAPPER,
    item: { left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [left, top]);

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <div ref={drag} style={{ left, top }} className="wrapper">
      {children}
    </div>
  );
};

export default Wrapper;
