import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './friendItem.css'

const FriendItem = ({
  username,
  selected,
}) => (
  <li
    className={`itemFriendContainer`}>
    <a className={`itemFriend`} onClick={selected} >
      {username}
    </a>
    <div className="remove">
      <i className="fas fa-trash-alt" />
    </div>
  </li>
);

export default connect(
  undefined,
  (dispatch, { id }) => ({
    selected: () => {
      console.log("ree fam");
      
      dispatch(actions.notesFetchFromFriendRequest(id));
    },
    remove: () => dispatch(actions.removeNoteRequest(id)),
  }),
)(FriendItem);