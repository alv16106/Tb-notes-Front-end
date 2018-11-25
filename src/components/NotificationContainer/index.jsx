import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NotificationElement from './NotificationElement';
import styles from './NotificationContainer.css'

const NotificationContainer = ({ dismiss, toasts }) => {
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

const mapDispatchToProps = dispatch => ({
  dismiss: (id) => {
    dispatch(actions.dismissNotification(id))
  }
})

const mapStateToProps = state => ({
  toasts: state.notifications.notifications
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
