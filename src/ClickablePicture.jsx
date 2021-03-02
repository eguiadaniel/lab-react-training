import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      img: props.img,
      imgClicked: props.imgClicked,
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
          {this.state.active && <img src={this.props.imgClicked} alt="" />}
          {!this.state.active && <img src={this.props.img} alt="" />}
        </a>
      </div>
    );
  }
}

export default ClickablePicture;
