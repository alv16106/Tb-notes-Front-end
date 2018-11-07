import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';
import MenuItem from '../SideMenuItem';

import './side-menu.css';


const SideMenu = ({
    notebooks,
    showNotebookForm,
    hideNotebookForm,
    notebookFormShowing
}) => (

    <div className="sideMenu">
        <ul className="menuList">
            <MenuItem icon="far fa-sticky-note" name="All notes" />
            <MenuItem icon="far fa-trash-alt" name="Trash" />
        </ul>

        <ul className="sideMenu folders scroll" id="style-1"> 
            { notebooks.map(
                notebook => <MenuItem key={notebook.id} name={notebook.name} color={notebook.color} />
            ) }
        </ul>
        <div onClick={()=>(
            notebookFormShowing?hideNotebookForm():showNotebookForm()
        )}>
            <MenuItem icon="fas fa-folder-plus" name="Add" />
        </div>

    </div>

);



export default connect(
    state => ({
        notebooks: selectors.getNotebooks(state),
        notebookFormShowing: state.notebookFormShowing,
    }),
    dispatch => ({
        showNotebookForm: () => {
            dispatch(actions.showNotebookForm())
        },
        hideNotebookForm:  () => {
            dispatch(actions.hideNotebookForm())
        }
    })
)(SideMenu);