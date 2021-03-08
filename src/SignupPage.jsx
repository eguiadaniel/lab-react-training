import React from 'react';
import './App.css';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: 'ES',
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
  };

  handleChangeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="text"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleChangeInput}
            name="email"
          />

          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="text"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChangeInput}
            name="password"
          />

          <label htmlFor="nationality-input">Nationality</label>
          <select
            id="nationality-input"
            value={this.state.select}
            onChange={this.handleChangeInput}
            name="nationality"
          >
            <option value="PT">Portugal</option>
            <option value="ES">Spain</option>
            <option value="BZ">Brazil</option>
          </select>
          <button>Sigup</button>
        </form>
        <hr />
        <span>Your email is {this.state.email}</span> <br />
        <span>
          Your password is {this.state.password.length} characters long
        </span>{' '}
        <br />
        <span>Your nationality is {this.state.nationality}</span> <br />
        <br />
      </div>
    );
  }
}

export default SignupPage;
