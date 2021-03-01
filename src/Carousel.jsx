import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      imgs: props.imgs,
    };

    this.increaseCount = () => {
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

    this.decreaseCount = () => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1,
        });
      } else {
        this.setState({
          count: 3,
        });
      }
    };
    // this.increasecount = () => {
    //   console.log(this.state.count);
    //   this.setState({
    //     count: this.state.count <= 0 ? this.state.count +1 : this.state.count <= this.state.length ? this.state.count = 0
    //   })
    // };
  }

  render() {
    return (
      <div>
        <button onClick={this.decreaseCount}>Left</button>
        <img src={this.state.imgs[this.state.count]} alt="" />
        <button onClick={this.increaseCount}>Right</button>
      </div>
    );
  }
}

export default Carousel;
