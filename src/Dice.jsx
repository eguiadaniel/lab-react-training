import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      face: 0,
    };

    this.timeOut = setTimeout(
      
      this.randomDice = () => {
        console.log('increased');

        if (this.state.count < 3) {
          this.setState({
            count: this.state.count + 1,
          });
        } else {
          this.setState({
            count: 0,
          });
        }
      };
      , 1000);
  }

  render() {
    return (
      <div>
        <a onClick={this.decreaseCount}>
          Left
          <img src="./img/dice-empty.png" alt="" />
          <img src={this.state.imgs[this.state.count]} alt="" />
        </a>
      </div>
    );
  }
}

export default Dice;
