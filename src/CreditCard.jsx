import React from 'react';

import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const lastDigits = number.slice(number.length - 4);

  return (
    <div style= {{backgroundColor: bgColor}} className="CreditCard" >
      <div id="container" className="CreditCard-img-container">
        <img src="" className="CreditCard-img" alt="CreditCard" />
      </div>
      <div id="number">
        <h1>
          {('·'.repeat(4) + ' ').repeat(3)}
          {lastDigits}
        </h1>
      </div>
      <div id="info" style={{color: color}}>
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
