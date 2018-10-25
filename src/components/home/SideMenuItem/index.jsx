import React from 'react';

import './side-menu-item.css';

const SideMenuItem = ({ icon = "far fa-folder", name }) => (
    <li className="itemContainer">
        <a className="item">
            <i className={`icon ${icon}`}></i>
            <p> {name} </p>
        </a>
    </li>
);

export default SideMenuItem;