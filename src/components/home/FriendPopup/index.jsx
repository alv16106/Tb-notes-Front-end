import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { customInput } from '../../customInputs';
import Popup, { PopupHeader, PopupContent } from '../../Popup';
import FriendItem from '../../FriendItem';
import * as actions from '../../../actions';
import * as selectors from '../../../reducers';
import './friendForm.css'
import FriendPopupForm from './FriendPopupForm/FriendPopupForm';

class FriendPopup extends Component {

  constructor(props) {
    super(props);
    this.requestFriends = this.props.requestFriends;
  }

  componentWillMount() {
    this.requestFriends();
  }

  render() {
    const { friends } = this.props;
    console.log(friends);
    return (
      <Popup hide={actions.hideFriendForm}>
        <PopupHeader>
          Friend List
        </PopupHeader>
        <PopupContent>
          {  /** LISTA */}
          <ul className="friendlist scroll">
            {friends.map(
              friend => (
                <FriendItem username={friend.username} key={friend.id} id={friend.id} />
              )
            )}
          </ul>
          <FriendPopupForm/>
        </PopupContent>

      </Popup>
    );
  }
}

export default connect(
  state => ({
    friends: selectors.getFriends(state)
  }),
  dispatch => ({
    requestFriends: () => {
      dispatch(actions.fetchFriendsRequest());
    },
  })
)(FriendPopup);