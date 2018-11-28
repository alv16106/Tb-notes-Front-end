import React, { Component } from "react";

class NotificationElement extends Component {
  componentDidMount(){
    const { type, onDismissClick } = this.props;
    if (type === 'success') {
      setTimeout(onDismissClick, 2000);
    }
  }

  render() {
    const { 
      color,
      type,
      text,
      onDismissClick 
    } = this.props;

    return (
      <li className={`toast ${type}`}>
        <p className="toast__content">
          { text }
        </p>
        <button className="toast__dismiss" onClick={ onDismissClick }>
          x
        </button>
      </li>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}

export default NotificationElement;