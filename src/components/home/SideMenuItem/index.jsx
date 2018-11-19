import React from 'react';
import { connect } from 'react-redux';

import './side-menu-item.css';
import { dispatch } from 'rxjs/internal/observable/pairs';

import * as actions from '../../../actions';

const SideMenuItem = ({
    icon = "far fa-folder",
    name,
    color = 'rgba(0,0,0,0)',
    active,
    select,
    selected,
    deleteItem,
    deletable = true,
}) => {
    const colorString = (color.charAt(0) === '#' || color.charAt(0) === 'r') ? color : `#${color}`;
    return (
        <li className="itemContainer" onClick={() => selected(active)}>
            <a className={`item ${select ? 'active' : ''}`}>
                <i className={`icon ${icon}`}></i>
                <p> {name} </p>
                <div className="color" style={{ background: `${colorString}` }} onClick={()=>deleteItem(deletable)}>
                    {
                        deletable ? 
                        <i className="remove fas fa-trash-alt" /> :
                        null
                    }
                    
                </div>
            </a>
        </li>
    )
};

export default connect(
    undefined,
    (dispatch, { id }) => ({
        selected: (active) => {
            console.log(id, active)
            if (active)
                dispatch(actions.setCurrentNotebook(id));
        },
        deleteItem: (deletable) => {
            if (deletable)
                dispatch(actions.removeNotebookRequest(id));
        }
    })
)(SideMenuItem);