import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    title: "",
  };
  namechangeHandler = (event) => {
    this.setState({ title: event.target.value });
  };
  submitHandler = () => {};
  render() {
    const mystyle = {
      color: "black",
      fontFamily: "Arial",
      padding: "5px",
      margin: "200px",
    };
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            style={mystyle}
            type="textarea"
            name="title"
            value={this.state.title}
            onChange={this.namechangeHandler}
          />
        </form>
      </div>
    );
  }
}

export default App;
