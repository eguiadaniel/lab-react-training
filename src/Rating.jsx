import React from 'react';

const Rating = ({ children }) => {
  let ratingValue = children instanceof Object ? children.value : children;
  let ratingColor =
    children instanceof Object ? children.selectedColor : 'black';

  console.log(`--------${ratingValue}`);
  console.log(`--------${ratingColor}`);

  const numberStars =
    '★'.repeat(Math.round(ratingValue)) +
    '☆'.repeat(5 - Math.round(ratingValue));

  return (
    <div style={{ ratingColor }}>
      {numberStars}
      {ratingColor}
    </div>
  );

  // const selectedColor = this.props.selecedCtolor;

  // if (children instanceof Object) {
  //   return <div>OBJECT {numberStars}</div>;
  // } else {
  //   return <div> {numberStars} </div>;
  // }

  // console.log(children instanceof Object);
  // return <div>TEST</div>;
};

export default Rating;
