import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
        password: ""
      },
      hasError: false
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  validateEmail = email => {
    var regEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-])/;

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

      this.setState({
        hasError: true
      });
    } else {
      if (this.state.email === "") {
        document.getElementById("login-alert").innerText =
          "Please enter your Email!";

        this.setState({
          hasError: true
        });
      } else {
        this.validateEmail(this.email);
        if (this.validateEmail !== true) {
          document.getElementById("login-alert").innerText =
            "Please enter a Valid Email!";

          this.setState({
            hasError: true
          });
        }

        if (this.state.password === "") {
          document.getElementById("login-alert").innerHTML =
            "Please enter your Password!";

          this.setState({
            hasError: true
          });
        }
      }
    }

    console.log(this.state.fields.email, this.state.fields.password);
  }

  render() {
    return (
      <>
        {(this.hasError = true ? <div id="login-alert"></div> : null)}
        <div className="main-container">
          <div className="login-container">
            <div className="login-title">Corella</div>
            <div className="login">Login</div>
            <div className="login-inputs">
              <label>Email</label>
              <input
                name="email"
                value={this.state.fields["email"]}
                refs="email"
                onChange={this.handleInputChange.bind(this, "email")}
                type="email"
              />
              <label>Password</label>
              <input
                name="password"
                value={this.state.fields["password"]}
                refs="password"
                onChange={this.handleInputChange.bind(this, "password")}
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
        </div>
      </>
    );
  }
}

export default Home;
