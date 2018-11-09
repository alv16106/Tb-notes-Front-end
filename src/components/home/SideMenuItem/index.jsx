import React from 'react';

import './side-menu-item.css';

const SideMenuItem = ({
    icon = "far fa-folder",
    name,
    color = 'rgba(0,0,0,0)',
}) => {
    const colorString = (color.charAt(0) === '#' || color.charAt(0) === 'r') ? color : `#${color}`;
    return (
        <li className="itemContainer">
            <a className="item">
                <i className={`icon ${icon}`}></i>
                <p> { name } </p>
                <div className="color" style={{background: `${colorString}`}}> </div>
            </a>
        </li>
    )
};

export default SideMenuItem;