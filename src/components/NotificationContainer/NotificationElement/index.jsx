import React, { Component } from "react";

class NotificationElement extends Component {
  render() {
    const { 
      color,
      type,
      text,
      onDismissClick 
    } = this.props;
    
    return (
      <li className="toast" style={{ backgroundColor: color }}>
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