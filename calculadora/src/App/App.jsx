import React, { useState } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  function clearMemory() {
    setDisplayValue("0");
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  function setOperations(op) {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);

      setClearDisplay(true);
    } else {
      const equals = op === "=";
      const currentOperation = operation;

      const newValues = [...values];
      try {
        newValues[0] = eval(
          `${newValues[0]}${currentOperation}${newValues[1]}`
        );
      } catch (error) {
        newValues[0] = values[0];
      }
      newValues[1] = 0;
      setDisplayValue(newValues[0]);
      setOperation(equals ? null : operation);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(newValues);
    }
  }

  function addDigit(n) {
    if (n === "." && displayValue.includes(".")) {
      return;
    }

    const newClearDisplay = displayValue === "0" || clearDisplay;
    const currentValue = newClearDisplay ? "" : displayValue;
    const newDisplayValue = currentValue + n;
    const newValue = parseFloat(newDisplayValue);
    const newValues = [...values];
    newValues[current] = newValue;

    setDisplayValue(newDisplayValue);
    setValues(newValues);
    setClearDisplay(false);
    console.log(values);
  }

  return (
    <div className="caluladora">
      <Display value={displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperations} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperations} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperations} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperations} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperations} operation />
    </div>
  );
}

export default App;
