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
      sender: { name },
    } = this.props;
    console.log(name);
    return (
      <article>
        <p>Sender: {name}</p>
        <p className="TextMessage">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          perferendis a deleniti odio facilis facere aspernatur, aperiam
          veritatis porro
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
