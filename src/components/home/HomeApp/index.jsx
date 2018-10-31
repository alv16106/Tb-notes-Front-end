import React from 'react';
import { connect } from 'react-redux';

import './home-app.css';

import SideMenu from '../SideMenu';
import NoteList from '../NoteList';
import CurrentNote from '../CurrentNote';
import { dispatch } from 'rxjs/internal/observable/pairs';

import * as actions from '../../../actions';

class HomeApp extends React.Component {

    constructor(props) {
        super(props)
        this.login = this.props.fetchAll;
    }

    componentWillMount() {
        this.login();
    }

    render() {
        return(
            <div className="homeApp">
                <SideMenu />
                <NoteList />
                <CurrentNote />
            </div>
        );
    }
}

export default connect(
    undefined,
    dispatch => ({
        login: () => {
            dispatch(actions.logInRequest('javier', 'j66352769'))
        }
    })
)(HomeApp);