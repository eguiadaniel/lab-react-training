import React from 'react';
import './App.css';

class Dice extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {      
      dice: 0,
      src: "./img/dice0.png"
    };  
  }
  
  diceLaunching = () => {
    this.setState ({
      src: "./img/dice0.png"
      })      
  }

  randomDice = () => {
    
     let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
     console.log(random)
     let imgSrc = "./img/dice" + random + ".png"
     console.log(imgSrc)
     // 
     this.setState ({
     src: imgSrc
     })
    }
    
  handleClick = () => {  
    setTimeout(() => {
      setTimeout(() => {
        this.randomDice();
        console.log(this.state.dice)      
      },1000)  
        this.diceLaunching();
        console.log(this.state.dice);
    },100)
  }  


  // handleClick = () => {
  //    this.randomDice();
  // }

  // setTimeout(
  //   () => this.setState({ position: 1 }), 
  //   3000
  // );


  render() {
      return (
      <div>
      {/* <button onClick={this.randomDice} value="Click me"> Boton </button> */}
          <img className="dice" onClick={this.handleClick} src={this.state.src} alt="" />
      </div>
      )
  }

  }


export default Dice;
