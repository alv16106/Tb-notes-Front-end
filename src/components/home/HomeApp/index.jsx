import React from 'react';
import { connect } from 'react-redux';

import './home-app.css';

import SideMenu from '../SideMenu';
import NoteList from '../NoteList';
import CurrentNote from '../CurrentNote';

import * as actions from '../../../actions';

class HomeApp extends React.Component {

    constructor(props) {
        super(props)
        this.login = this.props.login;
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
            console.log("ree");
            
            /* dispatch(actions.logInRequest('javier', 'j66352769')) */
        }
    })
)(HomeApp);