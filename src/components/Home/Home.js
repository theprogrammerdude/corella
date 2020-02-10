import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasError: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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

  validateEmail = email => {
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regEx.test(String(email).toLowerCase());
  };

  handleLogin() {
    this.setState(state => ({
      email: this.email,
      password: this.password
    }));

    if (this.state.email === "" && this.state.password === "") {
      document.getElementById("login-alert").innerText =
        "Please enter your Credentials!";

      this.state.hasError = true;
    } else {
      if (this.state.email === "") {
        document.getElementById("login-alert").innerText =
          "Please enter your Email!";

        this.state.hasError = true;
      } else {
        this.validateEmail(this.state.email);
        if (this.validateEmail !== true) {
          document.getElementById("login-alert").innerText =
            "Please enter a Valid Email!";

          this.state.hasError = true;
        }

        if (this.state.password === "") {
          document.getElementById("login-alert").innerHTML =
            "Please enter your Password!";

          this.state.hasError = true;
        }
      }
    }

    console.log(this.state.email, this.state.password);
  }

  render() {
    return (
      <>
        {(this.state.hasError = true ? <div id="login-alert"></div> : null)}
        <div className="login-container">
          <div className="login-title">Corella</div>
          <div className="login-inputs">
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
          </div>
          <div>
            <button className="login-btn" onClick={this.handleLogin}>
              Login
            </button>
          </div>
          <h3>
            Don't have an account?{" "}
            <Link to="/signup" className="back-btn">
              Sign Up!
            </Link>
          </h3>
        </div>
      </>
    );
  }
}

export default Home;
