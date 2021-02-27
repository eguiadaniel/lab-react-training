import React from 'react';

const Random = (props) => {
  const randomValue = Math.floor(Math.random() * props.max) + props.min;
  return (
    <div>
      <h3>
        Random value between {props.min} and {props.max} =&gt; {randomValue}
      </h3>
    </div>
  );
};

export default Random;
