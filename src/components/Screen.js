import React from 'react';
import "./Screen.css";

const Screen = ({ count, value }) => {
    return (
        <div className="screen" >
            <div>{`${count.totalValue} ${count.sign}`}</div>
            <div>{value}</div>
        </div>
    );
};

export default Screen;