import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NotificationElement from './NotificationElement';
import * as selectors from '../../reducers'
import styles from './NotificationContainer.css'

class NotificationContainer extends Component{
  componentDidMount(){
    const { refreshToken, token } = this.props;
    setInterval(refreshToken, 3540000, token);
  }

  render(){
    const { dismiss, toasts } = this.props;
    return(
      <ul className="toasts">
        {toasts.map(toast => {
          const { id } = toast;
          return (
            <NotificationElement {...toast} key={id} onDismissClick={() => dismiss(id)} />
          );
        })}
      </ul>
    );
  }

}

/* const NotificationContainer = ({ dismiss, toasts }) => {
  return (
    <ul className="toasts">
      {toasts.map(toast => {
        const { id } = toast;
        return (
          <NotificationElement {...toast} key={id} onDismissClick={() => dismiss(id)} />
        );
      })}
    </ul>
  );
};
 */
const mapDispatchToProps = dispatch => ({
  dismiss: (id) => {
    dispatch(actions.dismissNotification(id))
  },
  refreshToken: (token) => {
    if(token){
      dispatch(actions.refreshJWT(token))
    }
  }
})

const mapStateToProps = state => ({
  toasts: state.notifications.notifications,
  token: selectors.getUser(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
