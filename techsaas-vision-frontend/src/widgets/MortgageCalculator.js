import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [payment, setPayment] = useState('');

  const handleCalculate = () => {
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    const monthlyPayment =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    setPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="mortgage-calculator">
      <div>
        <label>Principal:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Term (Years):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate Payment</button>
      {payment && (
        <div>
          <h3>Monthly Payment: ${payment}</h3>
        </div>
      )}
    </div>
  );
};
export default MortgageCalculator;
