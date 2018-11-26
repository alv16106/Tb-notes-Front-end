import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import './popup.css';

class Popup extends Component {

  constructor(props) {
    super(props);
    this.close = this.props.close;
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.close();
    }
  }

  render() {
    const { children } = this.props; 
    return (
      <div className="popup-background">
        <div ref={this.setWrapperRef}>
          <PopupCard>
            {children}
          </PopupCard>
        </div>
      </div>
    )
  }
}


export default connect(
  undefined,
  dispatch => ({
    close: (e) => {
      dispatch(actions.hideNotebookForm());
    }
  })
)(Popup);

const PopupCard = ({children}) => (
  <div className="popup">
    {children}
  </div>
)

export const PopupHeader = ({ children }) => (
  <div className="header">
    <h1>{children}</h1>
    <hr />
  </div>
)

export const PopupContent = ({ children }) => (
  <div className="content" >
    {children}
  </div>
)
