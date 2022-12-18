import React from "react";
import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false,
    };
  }

  

  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        Read message
      </button>
    );
  }
}

export default Button;
