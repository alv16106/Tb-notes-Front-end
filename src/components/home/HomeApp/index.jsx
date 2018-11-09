import React from 'react';
import { connect } from 'react-redux';

import './home-app.css';

import SideMenu from '../SideMenu';
import NoteList from '../NoteList';
import CurrentNote from '../CurrentNote';
import NotebookForm from '../NotebookForm';

import * as actions from '../../../actions';

class HomeApp extends React.Component {

    constructor(props) {
        super(props)
        this.login = this.props.login;
        this.fetchNotebooks = this.props.loadNotebooks;
    }

    componentWillMount() {
        //this.login();
        console.log("vamo a cargar");
        
    }

    componentDidMount() {
        //this.fetchNotebooks();
    }

    render() {
        const { notebookFormShowing } = this.props;
        return(
            <div className="homeApp">
                <SideMenu />
                <NoteList />
                <CurrentNote />
                {
                    notebookFormShowing ? <NotebookForm /> : null
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        notebookFormShowing: state.notebookFormShowing,
    }),
    dispatch => ({
        login: () => {
            dispatch(actions.logInRequest('javier', 'j66352769'))
        }
    })
)(HomeApp);