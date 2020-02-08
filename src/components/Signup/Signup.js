import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleConfirmPasswordChange(event) {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  handleSignup() {
    this.setState(state => ({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }));

    console.log(
      this.state.email,
      this.state.password,
      this.state.confirmPassword
    );
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-title">Corella</div>
        <div className="signup-inputs">
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            type="email"
          />
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            type="password"
          />
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
            type="password"
          />
        </div>
        <div>
          <button className="signup-btn" onClick={this.handleSignup}>
            Sign Up!
          </button>
        </div>
        <h3>
          <Link to="/" className="back-btn">
            &larr; Back to Login
          </Link>
        </h3>
      </div>
    );
  }
}

export default Signup;
