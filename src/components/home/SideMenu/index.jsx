import React from 'react';

import './side-menu.css';

import MenuItem from '../SideMenuItem';

const SideMenu = () => (

    <div className="sideMenu">
        <ul className="menuList">
            <MenuItem icon="far fa-sticky-note" name="All notes" />
        </ul>
    </div>

);


export default SideMenu;