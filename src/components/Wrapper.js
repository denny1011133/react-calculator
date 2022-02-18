import React from 'react';
import "./Wrapper.css";
import { ItemTypes } from '../constants'
import { useDrag } from 'react-dnd'

const Wrapper = ({ children }) => {

    const [, dragRef] = useDrag(() => ({
        type: ItemTypes.WRAPPER,
    }))

    return (
        <div ref={dragRef} className="wrapper">{children}</div>)
};


export default Wrapper;


