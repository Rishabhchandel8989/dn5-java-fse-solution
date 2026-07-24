/*------------ Hands-on 8 ------------------------*/

import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  UpdateEntry = () => {
    this.setState({
      entrycount: this.state.entrycount + 1,
    });
  };

  UpdateExit = () => {
    this.setState({
      exitcount: this.state.exitcount + 1,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Mall Entry Counter</h1>

        <h2>People Entered : {this.state.entrycount}</h2>

        <button onClick={this.UpdateEntry} style={{ backgroundColor: "green", color: "white" }}>
          Login
        </button>

        <br />
        <br />

        <h2>People Exited : {this.state.exitcount}</h2>

        <button onClick={this.UpdateExit} style={{ backgroundColor: "red", color: "white" }}>
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;