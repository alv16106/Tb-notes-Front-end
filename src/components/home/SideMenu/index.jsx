import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';
import MenuItem from '../SideMenuItem';
import Loader from '../../LoadCircle';

import './side-menu.css';


const SideMenu = ({
  notebooks,
  showNotebookForm,
  hideNotebookForm,
  notebookFormShowing,
  selectNotebook,
  isLoading,
}) => (

    <div className="sideMenu">
      <ul className="menuList">
        <MenuItem icon="far fa-sticky-note" name="All notes" deletable={false} />
        <MenuItem icon="fas fa-user-friends" name="Friends" deletable={false} />
      </ul>

      <ul className="sideMenu folders scroll" id="style-1">
        {isLoading ?
          <Loader /> :
          notebooks.length <= 0 ?
            <h2> No hay cuadernos </h2> :
            notebooks.map(notebook =>
              <MenuItem
                id={notebook.id}
                key={notebook.id}
                name={notebook.name}
                color={notebook.color}
                select={selectNotebook === notebook.id}
                active={notebook.confirmed} />

            )

        }
      </ul>
      <div onClick={() => (
        notebookFormShowing ? hideNotebookForm() : showNotebookForm()
      )}>
        <MenuItem icon="fas fa-folder-plus" name="Add" deletable={false} />
      </div>

    </div>

  );



export default connect(
  state => ({
    notebooks: selectors.getNotebooks(state),
    notebookFormShowing: state.notebookFormShowing,
    selectNotebook: state.currentNotebook,
    isLoading: selectors.itsNotebooksLoading(state),
  }),
  dispatch => ({
    showNotebookForm: () => {
      dispatch(actions.showNotebookForm())
    },
    hideNotebookForm: () => {
      dispatch(actions.hideNotebookForm())
    }
  })
)(SideMenu);