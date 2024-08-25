import './InvestorDealCalculator.css';
import { useState } from 'react';
import { useThemeSettings } from '../context/theme/ThemeSettingsContext/ThemeSettingsContext';

const InvestorDealCalculator = () => {
  const [dealType, setDealType] = useState('wholesale');
  const [inputs, setInputs] = useState({});
  const themeSettings = useThemeSettings();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const calculateDeal = () => {
    const dealCalculators = {
      wholesale: calculateWholesaleDeal,
      fixAndFlip: calculateFixAndFlipDeal,
      buyAndHold: calculateBuyAndHoldDeal,
      brrrr: calculateBRRRRDeal,
      creativeFinance: calculateCreativeFinanceDeal,
    };

    return (
      dealCalculators[dealType]?.() || 'Please select a deal type.'
    );
  };

  const calculateWholesaleDeal = () => {
    const { repairCosts, arv, wholesaleFee } = inputs;
    const mao = arv * 0.7 - repairCosts - wholesaleFee;
    return `Maximum Allowable Offer: $${mao}`;
  };

  const calculateFixAndFlipDeal = () => {
    const { repairCosts, arv, holdingCosts } = inputs;
    const totalCosts = [repairCosts, holdingCosts].reduce(
      (acc, val) => acc + parseFloat(val || 0),
      0
    );
    const netProfit = arv - totalCosts;
    return `Net Profit: $${netProfit}`;
  };

  const calculateBuyAndHoldDeal = () => {
    const { purchasePrice, rentalIncome, expenses } = inputs;
    const netIncome = rentalIncome - expenses;
    const roi = (netIncome * 12) / purchasePrice;
    return `ROI: ${roi * 100}%`;
  };

  const calculateBRRRRDeal = () => {
    const { arv, refinanceAmount, rentalIncome, expenses } = inputs;
    const equity = arv - refinanceAmount;
    const cashFlow = rentalIncome - expenses;
    return `Equity After Refinance: $${equity}, Monthly Cash Flow: $${cashFlow}`;
  };

  const calculateCreativeFinanceDeal = () => {
    const {
      sellerFinancingAmount,
      interestRate,
      loanTerm,
      monthlyRent,
    } = inputs;
    const monthlyPayment =
      (sellerFinancingAmount * (interestRate / 100)) / loanTerm;
    const cashFlow = monthlyRent - monthlyPayment;
    return `Monthly Cash Flow: $${cashFlow}`;
  };

  return (
    <div
      className="investor-deal-calculator"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      <h2
        style={{
          color: themeSettings.colors.accent,
          borderBottom: `2px solid ${themeSettings.colors.accent}`,
        }}
      >
        Investor Deal Calculator
      </h2>
      <div className="mode-selector">
        <label>Select Deal Type:</label>
        <select onChange={(e) => setDealType(e.target.value)}>
          <option value="wholesale">Wholesale</option>
          <option value="fixAndFlip">Fix and Flip</option>
          <option value="buyAndHold">Buy and Hold</option>
          <option value="brrrr">BRRRR</option>
          <option value="creativeFinance">Creative Finance</option>
        </select>
      </div>
      <div className="input-fields">
        <input
          type="number"
          name="purchasePrice"
          placeholder="Purchase Price"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="repairCosts"
          placeholder="Repair Costs"
          onChange={handleInputChange}
        />
        {dealType !== 'buyAndHold' && (
          <input
            type="number"
            name="arv"
            placeholder="After Repair Value (ARV)"
            onChange={handleInputChange}
          />
        )}
        {dealType === 'wholesale' && (
          <input
            type="number"
            name="wholesaleFee"
            placeholder="Wholesale Fee"
            onChange={handleInputChange}
          />
        )}
        {dealType === 'fixAndFlip' && (
          <input
            type="number"
            name="holdingCosts"
            placeholder="Holding Costs"
            onChange={handleInputChange}
          />
        )}
        {dealType === 'buyAndHold' && (
          <>
            <input
              type="number"
              name="rentalIncome"
              placeholder="Monthly Rental Income"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="expenses"
              placeholder="Monthly Expenses"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="capRate"
              placeholder="Cap Rate"
              onChange={handleInputChange}
            />
          </>
        )}
        {dealType === 'brrrr' && (
          <input
            type="number"
            name="refinanceAmount"
            placeholder="Refinance Amount"
            onChange={handleInputChange}
          />
        )}
        {dealType === 'creativeFinance' && (
          <>
            <input
              type="number"
              name="sellerFinancingAmount"
              placeholder="Seller Financing Amount"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="interestRate"
              placeholder="Interest Rate"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="loanTerm"
              placeholder="Loan Term (Months)"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="monthlyRent"
              placeholder="Monthly Rent"
              onChange={handleInputChange}
            />
          </>
        )}
      </div>
      <button
        className="calculate-button"
        onClick={calculateDeal}
        style={{
          backgroundColor: themeSettings.colors.accent,
          color: themeSettings.colors.textOnAccent,
        }}
      >
        Calculate
      </button>
      <div className="result-display">{calculateDeal()}</div>
    </div>
  );
};

export default InvestorDealCalculator;
