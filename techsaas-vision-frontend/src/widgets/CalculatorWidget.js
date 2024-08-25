import React, { useState } from 'react';
import './CalculatorWidget.css';

const CalculatorWidget = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [value, setValue] = useState(null);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(
        displayValue === '0' ? String(digit) : displayValue + digit
      );
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplayValue(
      displayValue.charAt(0) === '-'
        ? displayValue.slice(1)
        : '-' + displayValue
    );
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      let newValue = currentValue;

      if (operator === '+') newValue += inputValue;
      else if (operator === '-') newValue -= inputValue;
      else if (operator === '*') newValue *= inputValue;
      else if (operator === '/') newValue /= inputValue;

      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const inputPercent = () => {
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '');
    const newValue = parseFloat(displayValue) / 100;

    setDisplayValue(String(newValue.toFixed(fixedDigits.length + 2)));
  };

  const performOperation = () => {
    if (operator) {
      handleOperator(operator);
      setOperator(null); // Reset operator after calculation
    }
  };

  return (
    <div className="calculator-widget">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-keypad">
        <button
          className="calculator-key function-key"
          onClick={clearDisplay}
        >
          AC
        </button>
        <button
          className="calculator-key function-key"
          onClick={toggleSign}
        >
          ±
        </button>
        <button
          className="calculator-key function-key"
          onClick={inputPercent}
        >
          %
        </button>
        <button
          className="calculator-key operator-key"
          onClick={() => handleOperator('/')}
        >
          ÷
        </button>

        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(7)}
        >
          7
        </button>
        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(8)}
        >
          8
        </button>
        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(9)}
        >
          9
        </button>
        <button
          className="calculator-key operator-key"
          onClick={() => handleOperator('*')}
        >
          ×
        </button>

        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(4)}
        >
          4
        </button>
        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(5)}
        >
          5
        </button>
        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(6)}
        >
          6
        </button>
        <button
          className="calculator-key operator-key"
          onClick={() => handleOperator('-')}
        >
          −
        </button>

        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(1)}
        >
          1
        </button>
        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(2)}
        >
          2
        </button>
        <button
          className="calculator-key number-key"
          onClick={() => inputDigit(3)}
        >
          3
        </button>
        <button
          className="calculator-key operator-key"
          onClick={() => handleOperator('+')}
        >
          +
        </button>

        <button
          className="calculator-key number-key zero-key"
          onClick={() => inputDigit(0)}
        >
          0
        </button>
        <button
          className="calculator-key number-key"
          onClick={inputDot}
        >
          .
        </button>
        <button
          className="calculator-key operator-key"
          onClick={performOperation}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default CalculatorWidget;
