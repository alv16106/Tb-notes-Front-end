import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown/with-html';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';

import Dropdown, {DropdownItem} from '../../Dropdown';

import './current-note.css';

class CurrentNote extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    const {
      title,
      body,
      friends
    } = this.props;
    return(
      <div className="currentNote">
        <ReactMarkdown
          source={`# ${title ? title : ''}\n-------------\n\n${body ? body : ''}`}
          escapeHtml={false} />
        <Dropdown>
          <div className="send-note">
            <button type="submit"> <i class="fas fa-share-alt"></i> </button>
          </div>
          <div className="dropdown-content">
            { friends.map( friend => (
                <DropdownItem choose={actions.shareNoteRequest} key={friend.id} id={friend.id} content={friend.username} className="dropdown-item"  />
              ))
            }
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default connect(
  state => {
    const { title, body } = selectors.getCurrentNoteFull(state);
    const friends = selectors.getFriends(state);
    return {
      title,
      body,
      friends,
    }
  },
  dispatch => ({
    fetchFriends: dispatch(actions.fetchFriendsRequest()),
  }),
)(CurrentNote);