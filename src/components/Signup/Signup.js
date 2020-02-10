import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      hasError: false
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

  validateEmail = email => {
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regEx.test(String(email).toLowerCase());
  };

  handleSignup() {
    this.setState(state => ({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }));

    if (this.state.email === "" && this.state.password === "") {
      document.getElementById("signup-alert").innerText =
        "Please enter your Credentials!";

      this.state.hasError = true;
    } else {
      if (this.state.email === "") {
        document.getElementById("signup-alert").innerText =
          "Please enter your Email!";

        this.state.hasError = true;
      } else {
        this.validateEmail(this.state.email);
        if (this.validateEmail !== true) {
          document.getElementById("signup-alert").innerText =
            "Please enter a Valid Email!";

          this.state.hasError = true;
        }

        if (this.state.password === "") {
          document.getElementById("signup-alert").innerHTML =
            "Please enter your Password!";

          this.state.hasError = true;
        }

        if (this.state.password !== this.state.confirmPassword) {
          document.getElementById("signup-alert").innerHTML =
            "Password and Confirm Password do not match!";

          this.state.hasError = true;
        }
      }
    }

    console.log(
      this.state.email,
      this.state.password,
      this.state.confirmPassword
    );
  }

  render() {
    return (
      <>
        {(this.state.hasError = true ? <div id="signup-alert"></div> : null)}
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
              type="text"
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
      </>
    );
  }
}

export default Signup;
