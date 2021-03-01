import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      img: props.img,
      img: props.imgClicked,
    };

    this.setActive = () => {
      console.log('counchangeing stateting');
      console.log(this.state.active);

      this.setState({
        active: !this.state.active,
      });
    };
  }

  render() {
    return (
      <div>
        <a onClick={this.setActive}>
          {this.state.active && <img src="./img/persons/maxence.png" alt="" />}
          {!this.state.active && (
            <img src="./img/persons/maxence-glasses.png" alt="" />
          )}
        </a>
      </div>
    );
  }
}

export default ClickablePicture;
