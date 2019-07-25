import React from "react";
import validator from "validator";
import "normalize.css/normalize.css";
import "./Form.css";
class Form extends React.Component {
  state = {
    username: "",
    usernameError: "",
    usernameClass: "",
    email: "",
    emailError: "",
    emailClass: "",
    name: "",
    nameError: "",
    nameClass: "",
    password: "",
    passwordError: "",
    passwordClass: "",
    confirm: "",
    confirmError: "",
    confirmClass: "",
    website: "",
    websiteError: "",
    websiteClass: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let error = false;

    //validator for username
    if (!validator.isLength(this.state.username, { min: 4 })) {
      error = true;
      this.setState({
        usernameError: "Username must be at least 4 characters long",
        usernameClass: "err"
      });
    } else {
      this.setState({
        usernameError: "",
        usernameClass: ""
      });
    }
    // validator for email
    if (!validator.isEmail(this.state.email)) {
      error = true;

      this.setState({
        emailError: "Email must be valid",
        emailClass: "err"
      });
    } else {
      this.setState({
        emailError: "",
        emailClass: ""
      });
    }
    // validator for name
    if (!validator.isLength(this.state.name, { min: 1 })) {
      error = true;
      this.setState({
        nameError: "This space cannot be empty",
        nameClass: "err"
      });
    } else {
      this.setState({
        nameError: "",
        nameClass: ""
      });
    }

    //validator for password
    if (!validator.isLength(this.state.password, { min: 6 })) {
      this.setState({
        passwordError: "Password must be at least 6 characters long",
        passwordClass: "err"
      });
    } else {
      this.setState({
        passwordError: "",
        passwordClass: ""
      });
    }

    //validator for confirm
    if (!validator.equals(this.state.password, this.state.confirm)) {
      this.setState({
        confirmError: "Passwords must match",
        confirmClass: "err"
      });
    } else {
      this.setState({
        confirmError: "",
        confirmClass: ""
      });
    }
    //validator for website
    if (!validator.isURL(this.state.website)) {
      this.setState({
        websiteError: "Please enter a valid URL",
        websiteClass: "err"
      });
    } else {
      this.setState({
        websiteError: "",
        websiteClass: ""
      });
    }
  };

  render() {
    return (
      <form className="register" onSubmit={this.handleSubmit}>
        <h1>Profile</h1>
        {/* This is the user name */}
        <label className={this.state.usernameClass} htmlFor="username">
          {this.state.usernameError ? this.state.usernameError : "Username"}
        </label>
        <div className="input">
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleChange}
          />
        </div>
        {/* This is the email */}
        <label className={this.state.emailClass} htmlFor="email">
          {this.state.emailError ? this.state.emailError : "Email"}
        </label>
        <div className="input">
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        {/* This is the Name */}
        <label className={this.state.nameClass} htmlFor="name">
          {this.state.nameError ? this.state.nameError : "Name"}
        </label>
        <div className="input">
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        {/* This is the password */}
        <label className={this.state.passwordClass} htmlFor="password">
          {this.state.passwordError ? this.state.passwordError : "Password"}
        </label>
        <div className="input">
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        {/* This is for password confirm */}
        <label className={this.state.confirmClass} htmlFor="confirm">
          {this.state.confirmError
            ? this.state.confirmError
            : "Confirm Password"}
        </label>
        <div className="input">
          <input
            type="password"
            id="confirm"
            name="confirm"
            onChange={this.handleChange}
          />
        </div>
        {/* This is the website section */}
        <label className={this.state.websiteClass} htmlFor="website">
          {this.state.websiteError ? this.state.websiteError : "Website"}
        </label>
        <div className="input">
          <input
            type="website"
            id="website"
            name="website"
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
