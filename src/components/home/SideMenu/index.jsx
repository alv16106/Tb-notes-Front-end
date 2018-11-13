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
    notebookFormShowing,
    selectNotebook,
}) => (

    <div className="sideMenu">
        <ul className="menuList">
            <MenuItem icon="far fa-sticky-note" name="All notes" deletable={false} />
            <MenuItem icon="far fa-trash-alt" name="Trash" deletable={false} />
        </ul>

        <ul className="sideMenu folders scroll" id="style-1"> 
            { notebooks.length > 0 ? notebooks.map(
                notebook => <MenuItem 
                    id={notebook.id}  
                    key={notebook.id} 
                    name={notebook.name} 
                    color={notebook.color} 
                    select={selectNotebook===notebook.id}
                    active={notebook.confirmed} />
                
            ) :
                <div className="loading">
                    <div className="spinner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            }
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
        selectNotebook: state.currentNotebook,
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