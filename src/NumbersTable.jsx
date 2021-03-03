import React from 'react';
import './App.css';




function NumbersTable(props) {  
  const numbers = [];
  let min = 1;
  let max = props.limit;
  let step = 1;
  
  for(let i = min; i <= max; i += step){
    numbers.push(i);
  }
  
  const listItems = numbers.map((number) =>
  <div className="table-item">{number}</div>);
  
  console.log(listItems)
  
    return (
      <div className="table-list">
       {listItems}
      </div>
    );
  }


// 
export default NumbersTable

{/* <NumbersTable limit={12} /> */}
