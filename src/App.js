import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonArea from "./components/ButtonArea";
import Button from "./components/Button";

const btnSymbols = ["C", "+-", "%", "√ ", 7, 8, 9, "÷", 4, 5, 6, "×", 1, 2, 3, "-", 0, ".", "=", "+"]


function App() {

  let [count, setCount] = useState({
    enteredValue: 0,
    totalValue: 0,
    sign: "",
  })


  const handleClick = (btn) => {

    switch (btn) {
      case "=":
        handleSubmit()
        break;
      case "+":
      case "-":
      case "÷":
      case "×":
        handleSignClick(btn)
        break;
      case "C":
        handleClear()
        break;
      case "+-":
        handleReverse()
        break;
      case "%":
        handlePercent()
        break;
      default:
        handleNumberClick(btn)
    }


  }

  const handleNumberClick = (btnSymbol) => {
    function handleEnteredValue() {
      if (count.enteredValue === 0 && btnSymbol === "0") {
        return "0"
      } else if (count.enteredValue % 1 === 0) {
        return Number(count.enteredValue + btnSymbol)
      } return count.enteredValue + btnSymbol

    }
    setCount({
      ...count,
      enteredValue: handleEnteredValue(),
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
        } else if (sign === "×") {
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

  const handleReverse = () => {
    setCount({
      ...count,
      enteredValue: count.enteredValue ? count.enteredValue * -1 : 0,
      totalValue: count.totalValue ? count.totalValue * -1 : 0,
      sign: "",
    });
  }

  const handlePercent = () => {
  
    setCount({
      ...count,
      enteredValue: (count.enteredValue ? count.enteredValue : 0) / 100,
      totalValue: (count.totalValue ? count.totalValue : 0) / 100,
      sign: "",
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
                value={btn} onhandleClick={handleClick}
              />
            );
          })
        }
      </ButtonArea>
    </Wrapper>
  );
}

export default App;
