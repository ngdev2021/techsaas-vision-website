import React, { useState } from 'react';
import './BasicCalculator.css';

const BasicCalculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const sanitizedExpression = sanitizeExpression(expression);
      const calculatedResult = evaluateExpression(
        sanitizedExpression
      );
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to sanitize the expression
  const sanitizeExpression = (expr) => {
    // Remove any spaces from the expression
    expr = expr.replace(/\s+/g, '');

    // Validate the expression to contain only numbers, operators, and parentheses
    if (!/^[0-9+\-*/().%^]+$/.test(expr)) {
      throw new Error('Invalid characters in expression');
    }

    return expr;
  };

  // Function to evaluate a sanitized expression safely
  const evaluateExpression = (expr) => {
    const operatorPrecedence = {
      '^': 4,
      '%': 3,
      '*': 3,
      '/': 3,
      '+': 2,
      '-': 2,
    };

    const operators = [];
    const values = [];

    let i = 0;
    while (i < expr.length) {
      if (
        !isNaN(expr[i]) ||
        (expr[i] === '-' &&
          (i === 0 || '+-*/%^('.includes(expr[i - 1])))
      ) {
        let number = '';
        while (
          i < expr.length &&
          (/[0-9.]/.test(expr[i]) ||
            (expr[i] === '-' && number === ''))
        ) {
          number += expr[i];
          i++;
        }
        values.push(parseFloat(number));
      } else if ('+-*/%^'.includes(expr[i])) {
        while (
          operators.length &&
          operatorPrecedence[operators[operators.length - 1]] >=
            operatorPrecedence[expr[i]]
        ) {
          const op = operators.pop();
          const b = values.pop();
          const a = values.pop();
          values.push(applyOperator(op, a, b));
        }
        operators.push(expr[i]);
        i++;
      } else if (expr[i] === '(') {
        operators.push(expr[i]);
        i++;
      } else if (expr[i] === ')') {
        while (
          operators.length &&
          operators[operators.length - 1] !== '('
        ) {
          const op = operators.pop();
          const b = values.pop();
          const a = values.pop();
          values.push(applyOperator(op, a, b));
        }
        operators.pop(); // Remove '('
        i++;
      } else {
        throw new Error('Invalid expression');
      }
    }

    while (operators.length) {
      const op = operators.pop();
      const b = values.pop();
      const a = values.pop();
      values.push(applyOperator(op, a, b));
    }

    return values[0];
  };

  // Function to apply a mathematical operator
  const applyOperator = (op, a, b) => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) throw new Error('Division by zero');
        return a / b;
      case '%':
        return a % b;
      case '^':
        return Math.pow(a, b);
      default:
        throw new Error('Unknown operator');
    }
  };

  return (
    <div className="basic-calculator">
      <input type="text" value={expression} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('^')}>^</button>
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </div>
  );
};

export default BasicCalculator;
