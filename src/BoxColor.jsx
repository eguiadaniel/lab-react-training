import React from 'react';

const BoxColor = (props) => {
  const r = props.r;
  const g = props.g;
  const b = props.b;
  const bgColor = `rgb(${r},${g},${b})`;

  const perceivedBrightness = (r, g, b) => {
    return Math.sqrt(r * r * 0.241 + g * g * 0.691 + b * b * 0.068) > 255 / 2
      ? 'black'
      : 'white';
  };

  console.log(perceivedBrightness());

  const boxStyle = {
    color: perceivedBrightness(r, g, b),
    backgroundColor: bgColor,
    padding: '50px',
    border: 'solid black',
  };

  return (
    <div style={boxStyle}>
      <p>background-color: {bgColor}</p>
      <p>background-color: {bgColor}</p>
    </div>
  );
};

export default BoxColor;
