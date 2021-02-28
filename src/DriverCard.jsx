import React, { Component } from 'react';

import './DriverCard.css';

import Rating from './Rating';

class DriverCard extends Component {
  render() {
    const {
      name,
      rating,
      img,
      // car: [{ model, licensePlate }],
    } = this.props;

    const car = this.props.car;

    return (
      <div className="DriverCard">
        <div className="DriverCard-img-container ">
          <img src={img} className="DriverCard-img" alt="Idcard" />
        </div>
        <div className="DriverCard-items">
          <strong style={{ color: 'rgb(17, 170, 153)' }}>{name}</strong>
          <div>
            <Rating>{rating}</Rating>
          </div>
          <small>
            {car.model}
            {car.licensePlate}
          </small>
        </div>
      </div>
    );
  }
}

export default DriverCard;
