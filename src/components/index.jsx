import React from "react";
import { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false,
    };
  }
  handleClick = () => {
    this.setState({
      isRead: !this.state.isRead,
    });
  };

  render() {
    const {
      sender: { name, message },

    } = this.props;
    console.log(name);
    return (
      <article>
        <p>Sender: {name}</p>
        <p className="TextMessage">
          {message}
        </p>
        <p>
          {this.state.isRead ? "Message has been read" : "Message not read"}
        </p>
        <button className="Button" onClick={this.handleClick}>
          Read message
        </button>
      </article>
    );
  }
}

export default Message;
