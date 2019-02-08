import React, { Component } from "react";
import { Products } from "./Products";

class App extends Component {
  render() {
    console.log("props", this.props);

    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default App
