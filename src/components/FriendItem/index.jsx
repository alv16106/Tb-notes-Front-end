import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const FriendItem = ({
  username,
  selected,
}) => (
  <li
    className={`itemFriendContainer`}>
    <a className={`itemFriend`} onClick={selected} >
      <p> {username} </p>
      <i className="remove fas fa-trash-alt" />
    </a>
  </li>
);

export default connect(
  undefined,
  (dispatch, { id }) => ({
    selected: () => {
      dispatch(actions.notesFetchFromFriendRequest(id));
    },
    remove: () => dispatch(actions.removeNoteRequest(id)),
  }),
)(FriendItem);