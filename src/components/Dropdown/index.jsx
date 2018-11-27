import React from 'react';
import { connect } from 'react-redux';

import './dropdown.css';
import { dispatch } from 'rxjs/internal/observable/pairs';

const Dropdown = ({children, share}) => {
    return (
    <div className="dropdown">
        { children }
    </div>
    );
}


const DropdownItemDummy = ({content, share}) => (
    <div 
        onClick={share}
        className="dropdown-item" > 
            <p>{ content } </p> 
    </div>
);

export const DropdownItem = connect(
    undefined,
    (dispatch, {choose, id}) => ({
        share: () => {
            console.log(choose);
            dispatch(choose(id))
        }
    }),
)(DropdownItemDummy);

export default connect(
    undefined,
    undefined,
)(Dropdown);