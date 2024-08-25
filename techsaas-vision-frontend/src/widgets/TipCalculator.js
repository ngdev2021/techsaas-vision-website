import React, { useState } from 'react';

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [total, setTotal] = useState('');

  const handleCalculate = () => {
    const tip = (bill * tipPercentage) / 100;
    setTipAmount(tip.toFixed(2));
    setTotal((parseFloat(bill) + tip).toFixed(2));
  };

  return (
    <div className="tip-calculator">
      <div>
        <label>Bill Amount:</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div>
        <label>Tip Percentage:</label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate Tip</button>
      {tipAmount && (
        <div>
          <h3>Tip: ${tipAmount}</h3>
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
