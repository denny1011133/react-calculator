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


  const handleClick = (btn) => {
    const btnSymbol = btn.target.innerText
    if (btnSymbol === "=") {
      handleSubmit()
    } else if (btnSymbol === "/" || btnSymbol === "X" || btnSymbol === "-" || btnSymbol === "+") {
      handleSignClick(btnSymbol)
    } else if (btnSymbol === "C") {
      handleClear()
    } else (
      handleNumberClick(btnSymbol)
    )
  }

  const handleNumberClick = (btnSymbol) => {

    function handleEnterValue() {
      if (count.enteredValue === 0 && btnSymbol === "0") {
        return "0"
      } else if (count.enteredValue % 1 === 0) {
        return Number(count.enteredValue + btnSymbol)
      } return count.enteredValue + btnSymbol

    }
    setCount({
      ...count,
      enteredValue: handleEnterValue(),
      totalValue: !count.sign ? 0 : count.totalValue,
    });

  }

  const handleSubmit = () => {
    if (count.sign && count.enteredValue) {

      const arithmetic = (a, b, sign) => {

        if (sign === "+") {
          return a + b
        } else if (sign === "-") {
          return a - b
        } else if (sign === "X") {
          return a * b
        } return a / b

      }



      function getTotalValue() {
        if (count.num === "0" && count.sign === "/") {
          return "ERROR"
        } else {
          return arithmetic(Number(count.totalValue), Number(count.enteredValue), count.sign)
        }
      }
      setCount({
        ...count,
        totalValue: getTotalValue(),
        sign: "",
        enteredValue: 0,
      });
    }
  }

  const handleSignClick = (btnSymbol) => {


    function getTotalValue() {
      if (!count.totalValue && count.enteredValue) {
        return count.enteredValue
      } return count.totalValue
    }
    setCount({
      ...count,
      sign: btnSymbol,
      enteredValue: 0,
      totalValue: getTotalValue()
    });
  };

  const handleClear = () => {
    setCount({
      enteredValue: 0,
      totalValue: 0,
      sign: "",
    });
  }

  return (
    <Wrapper>
      <Screen value={count.enteredValue ? count.enteredValue : count.totalValue} />
      <ButtonArea>
        {
          btnSymbols.map((btn, i) => {
            return (
              <Button
                key={i}
                value={btn} onhandleClick={(btn) => handleClick(btn)}
              />
            );
          })
        }
      </ButtonArea>
    </Wrapper>
  );
}

export default App;
