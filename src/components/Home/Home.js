import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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

  handleLogin() {
    this.setState(state => ({
      email: this.email,
      password: this.password
    }));

    console.log(this.state.email, this.state.password);
  }

  render() {
    return (
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
    );
  }
}

export default Home;
