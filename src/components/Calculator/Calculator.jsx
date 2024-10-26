import React, { useState } from "react";

const Calculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [rangeValue, setRangeValue] = useState(40);

  const calculatePayment = () => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const payment =
      principal *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <h3 className="label-text font-semibold">Home Price: $</h3>
            </div>
            <input
              type="number"
              placeholder="Type here"
              value={homePrice}
              className="input input-bordered w-full max-w-xs font-bold text-3xl"
              onChange={(e) => setHomePrice(+e.target.value)}
            />
          </label>
        </div>
        <div>
          <h3 className="label-text font-semibold">Monthly payment</h3>
          <h2 className="text-3xl font-bold">${monthlyPayment}/mo</h2>
        </div>
        <div>
          <button className="btn btn-success text-white">
            Get pre-approved
          </button>
        </div>
      </div>
      <div>
        <input
          type="range"
          min={0}
          max="100"
          value={rangeValue}
          className="range range-success m-5"
          onChange={() => setRangeValue(calculatePayment)}
        />
      </div>
      <div className="my-5">
        <h3 className="label-text font-semibold">Monthly payment</h3>
        <h2 className="text-3xl font-bold">${monthlyPayment}/mo</h2>
      </div>
      {/* <div>
        <label>Down Payment: $</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(+e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%): </label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(+e.target.value)}
        />
      </div>
      <div>
        <label>Loan Term (years): </label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(+e.target.value)}
        />
      </div> */}
      {/* <button onClick={calculatePayment}>Calculate</button> */}
      {/* <h3>Estimated Monthly Payment: </h3> */}
    </div>
  );
};

export default Calculator;
