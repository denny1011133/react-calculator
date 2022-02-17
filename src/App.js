import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonArea from "./components/ButtonArea";
import Button from "./components/Button";

const btnSymbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "X", "/", "+-", "C", "%", "=", ".", "+-"]


function App() {

  let [count, setCount] = useState({
    enteredValue: 0,
    totalValue: 0,
    sign: "",
  })

  const handleNumberClick = (e) => {

    const targetValue = e.target.innerText;
    setCount({
      ...count,
      enteredValue: Number(count.enteredValue) + targetValue,
    });

  };



  return (
    <Wrapper>
      <Screen value={count.enteredValue ? count.enteredValue : count.totalValue} />
      <ButtonArea>
        {
          btnSymbols.map((btn, i) => {
            return (
              <Button
                key={i}
                value={btn} onClick={handleNumberClick}
              />
            );
          })
        }
      </ButtonArea>
    </Wrapper>
  );
}

export default App;
