import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./Form";
import ThankYou from "./thankYou";
import thankYou from "./thankYou";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Form} />
          <Route path="/thankyou" component={thankYou} />
        </div>
      </Router>
    );
  }
}

export default App;
