import React from "react";
import Form from "./components/form";
import validator from "validator";
import "normalize.css/normalize.css";
import "./App.css";
import MaterialIcon from "material-icons-react";

class App extends React {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Username</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" id="confirm" name="confirm" />
      </form>
    );
  }
}
export default App;

export default App;
