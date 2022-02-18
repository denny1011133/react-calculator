import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonArea from "./components/ButtonArea";
import Button from "./components/Button";
import { ItemTypes } from "./constants"
import { useDrop } from 'react-dnd'

const btnSymbols = ["C", "+-", "%", "sq", 7, 8, 9, "÷", 4, 5, 6, "×", 1, 2, 3, "-", 0, ".", "=", "+"]


function App() {

  const enteredValue = localStorage.getItem('enteredValue')
  const totalValue = localStorage.getItem('totalValue')

  let [count, setCount] = useState({
    enteredValue: Number(enteredValue) ? Number(enteredValue) : 0,
    totalValue: Number(totalValue) ? Number(totalValue) : 0,
    sign: "",
  })

  const [, dropRef] = useDrop(
    () => ({
      accept: ItemTypes.WRAPPER,
      drop: (item) => {
        console.log("Drop on todo", item);
      },
    })
  )

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
      case "sq":
        handleSqrt()
        break;
      case ".":
        handleDecimal(btn)
        break;
      default:
        handleNumberClick(btn)
    }


  }

  const handleNumberClick = (btnSymbol) => {

    btnSymbol = btnSymbol.toString()

    function handleEnteredValue() {

      if (count.enteredValue === 0 && btnSymbol === "0") {
        return "0"
      } else if (count.enteredValue % 1 === 0) {

        return Number(count.enteredValue + btnSymbol)

      }

      return count.enteredValue + btnSymbol

    }

    function handleTotalValue() {
      return !count.sign ? 0 : count.totalValue
    }

    localStorage.setItem('enteredValue', handleEnteredValue());
    localStorage.setItem('totalValue', handleTotalValue());

    setCount({
      ...count,
      enteredValue: handleEnteredValue(),
      totalValue: handleTotalValue()
    });

  }

  const handleSubmit = () => {
    if (count.sign && count.enteredValue) {

      const arithmetic = (a, b, sign) => {


        if (sign === "+") {
          if (a + b > Math.pow(2, 32)) {
            alert("超過數字上限")
            return 0
          }
          return a + b


        } else if (sign === "-") {
          if (a - b > Math.pow(2, 32)) {
            alert("超過數字上限")
            return 0
          }
          return a - b

        } else if (sign === "×") {
          if (a * b > Math.pow(2, 32)) {
            alert("超過數字上限")
            return 0
          }
          return a * b

        } else if (sign === "÷") {
          if (a / b > Math.pow(2, 32)) {
            alert("超過數字上限")
            return 0
          }
          return a / b

        }
      }

      localStorage.setItem("totalValue", getTotalValue())
      localStorage.setItem("enteredValue", 0)

      function getTotalValue() {
        if (count.enteredValue === "0" && count.sign === "÷") {
          return "無法除以零"
        } else {
          return arithmetic(Number(count.totalValue), Number(count.enteredValue), count.sign)
        }
      }
      setCount({
        ...count,
        totalValue: getTotalValue(),
        sign: "",
        enteredValue: 0,
      })
    }
  }

  const handleSignClick = (btnSymbol) => {


    function getTotalValue() {
      if (!count.totalValue && count.enteredValue) {
        return count.enteredValue
      } return count.totalValue
    }

    localStorage.setItem("totalValue", getTotalValue())
    localStorage.setItem("enteredValue", 0)

    setCount({
      ...count,
      sign: btnSymbol,
      enteredValue: 0,
      totalValue: getTotalValue()
    });
  }

  const handleClear = () => {

    localStorage.setItem("totalValue", 0)
    localStorage.setItem("enteredValue", 0)

    setCount({
      ...count,
      enteredValue: 0,
      totalValue: 0,
      sign: "",
    });
  }

  const handleReverse = () => {

    function getEnterValue() {
      return count.enteredValue ? count.enteredValue * -1 : 0
    }

    function getTotalValue() {
      return count.totalValue ? count.totalValue * -1 : 0
    }
    localStorage.setItem("totalValue", getTotalValue())
    localStorage.setItem("enteredValue", getEnterValue())

    setCount({
      ...count,
      enteredValue: getEnterValue(),
      totalValue: getTotalValue(),
      sign: "",
    });
  }

  const handlePercent = () => {

    function getEnteredValue() {
      return (count.enteredValue ? count.enteredValue : 0) / 100
    }

    function getTotalValue() {
      return (count.totalValue ? count.totalValue : 0) / 100
    }
    localStorage.setItem("totalValue", getTotalValue())
    localStorage.setItem("enteredValue", getEnteredValue())

    setCount({
      ...count,
      enteredValue: getEnteredValue(),
      totalValue: getTotalValue(),
      sign: "",
    });

  }

  const handleSqrt = () => {

    function getEnteredValue() {
      return Math.sqrt(count.enteredValue)
    }

    function getTotalValue() {
      return Math.sqrt(count.totalValue)
    }

    localStorage.setItem("totalValue", getTotalValue())
    localStorage.setItem("enteredValue", getEnteredValue())

    setCount({
      ...count,
      enteredValue: getEnteredValue(),
      totalValue: getTotalValue(),
      sign: "",
    });
  }

  const handleDecimal = (btnSymbol) => {

    function enterDecimal() {
      if (count.enteredValue.toString().includes(".")) {
        return count.enteredValue
      } else {
        return count.enteredValue + btnSymbol
      }
    }

    localStorage.setItem("enteredValue", enterDecimal())
    setCount({
      ...count,
      enteredValue: enterDecimal()
    });

  }

  return (
    <div ref={dropRef}>
      <Wrapper>
        <Screen count={count} value={count.enteredValue ? count.enteredValue : count.totalValue} />
        <ButtonArea>
          {
            btnSymbols.map((btn, i) => {
              return (
                <Button
                  key={i}
                  value={btn} handleClick={handleClick}
                />
              );
            })
          }
        </ButtonArea>
      </Wrapper>
    </div>
  )
}

export default App
