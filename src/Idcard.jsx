import React, { Component } from 'react';

import './Idcard.css';

class Idcard extends Component {
  render() {
    return (
      <div>
        <div className="Idcard">
          <div className="Idcard-img-container">
            <img src={this.props.picture} className="Idcard-img" alt="Idcard" />
          </div>
          <ul className="Idcard-items">
            <li>
              <strong>First name: </strong>
              {this.props.lastName}
            </li>
            <br />
            <li>
              <strong>Last name: </strong>
              {this.props.firstName}
            </li>
            <br />
            <li>
              <strong>Gender: </strong>
              {this.props.gender}
            </li>
            <br />
            <li>
              <strong>Height: </strong>
              {this.props.height}
            </li>
            <br />
            <li>
              <strong>Birth: </strong>
              {this.props.birth.toDateString()}
            </li>
            <br />
          </ul>
        </div>
      </div>
    );
  }
}

export default Idcard;
