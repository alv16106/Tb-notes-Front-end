import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown/with-html';
import { withRouter } from 'react-router-dom';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';
import * as routes from '../../../constants/routes';

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
      friends,
      history,
      editForm,
    } = this.props;
    return(
      <div className="currentNote">
        <ReactMarkdown
          source={`# ${title ? title : ''}\n-------------\n\n${body ? body : ''}`}
          escapeHtml={false} />

        <div className="edit" onClick={ event => { editForm(history) } }>
          <button type="submit"> <i class="far fa-edit"></i> </button>
        </div>
        
        <Dropdown>
          <div className="share">
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

export default withRouter(connect(
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
    editForm: (history) => {
      history.push(routes.EDITNOTE);
    }
  }),
)(CurrentNote));