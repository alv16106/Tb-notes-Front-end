import React from 'react';

import './side-menu.css';

import MenuItem from '../SideMenuItem';

const SideMenu = () => (

    <div className="sideMenu">
        <ul className="menuList">
            <MenuItem icon="far fa-sticky-note" name="All notes" />
            <MenuItem icon="far fa-trash-alt" name="Trash" />
        </ul>

        <ul className="sideMenu folders scroll" id="style-1"> 
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>

            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
            <MenuItem name="bla"/>
        </ul>

    </div>

);


export default SideMenu;