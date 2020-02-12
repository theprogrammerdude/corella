import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      hasError: false
    };

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleInputChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;

    this.setState({ fields });
  }

  validateEmail = email => {
    var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    return regEx.test(String(email).toLowerCase());
  };

  handleSignup() {
    this.setState(state => ({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }));

    if (this.state.fields.email === "" && this.state.fields.password === "") {
      document.getElementById("signup-alert").innerText =
        "Please enter your Credentials!";

      this.setState({
        hasError: true
      });
    } else {
      if (this.state.fields.email === "") {
        document.getElementById("signup-alert").innerText =
          "Please enter your Email!";

        this.setState({
          hasError: true
        });
      } else {
        this.validateEmail(this.state.fields.email);
        if (this.hasError === true) {
          document.getElementById("signup-alert").innerText =
            "Please enter a Valid Email!";

          this.setState({
            hasError: true
          });
        }

        if (this.state.fields.password === "") {
          document.getElementById("signup-alert").innerHTML =
            "Please enter your Password!";

          this.setState({
            hasError: true
          });
        }

        if (this.state.fields.password !== this.state.fields.confirmPassword) {
          document.getElementById("signup-alert").innerHTML =
            "Password and Confirm Password do not match!";

          this.setState({
            hasError: true
          });
        }
      }
    }

    if (this.state.hasError !== true) {
      return console.log(
        this.state.fields.email,
        this.state.fields.password,
        this.state.fields.confirmPassword
      );
    }
  }

  render() {
    return (
      <>
        {(this.hasError = true ? <div id="signup-alert"></div> : null)}
        <div className="main-container">
          <div className="signup-container">
            <div className="signup-title">Corella</div>
            <div className="signup">Sign Up!</div>
            <div className="signup-inputs">
              <label>Email</label>
              <input
                name="email"
                value={this.state.fields["email"]}
                onChange={this.handleInputChange.bind(this, "email")}
                ref="email"
                type="email"
              />
              <label>Password</label>
              <input
                name="password"
                value={this.state.fields["password"]}
                onChange={this.handleInputChange.bind(this, "password")}
                ref="password"
                type="password"
              />
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                value={this.state.fields["confirmPassword"]}
                onChange={this.handleInputChange.bind(this, "confirmPassword")}
                ref="confirmPassword"
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
        </div>
      </>
    );
  }
}

export default Signup;
