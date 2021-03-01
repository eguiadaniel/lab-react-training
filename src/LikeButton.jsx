import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      colorIndex: 0,
    };

    this.bgColorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    // let bgColor = bgColorArray[this.state.colorIndex];

    this.handleIncrementClick = () => {
      console.log('counting');
      console.log(this.state.colorIndex);

      this.setState({
        count: this.state.count + 1,
      });
      if (this.state.colorIndex < 5) {
        this.setState({
          colorIndex: this.state.colorIndex + 1,
        });
      } else {
        this.setState({
          colorIndex: 0,
        });
      }
    };
  }

  // this.changeBg = () => {
  //   console.log(this.state.bgColor);
  //   this.setState({
  //     bgColor: this.state.bgColor[Math.floor(Math.random() * (5 - 0) + 0)],
  //   });
  // };

  render() {
    return (
      <div
        style={{ backgroundColor: this.bgColorArray[this.state.colorIndex] }}
      >
        <button onClick={this.handleIncrementClick}>
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
