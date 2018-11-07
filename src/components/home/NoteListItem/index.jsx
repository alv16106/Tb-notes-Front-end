import React from 'react';

import './note-list-item.css';


const NoteListItem = ({ icon = "far fa-file-alt", title }) => (
    <li className="itemNoteContainer">
        <a className="item">
            <i className={`icon ${icon}`}></i>
            <p> {title} </p>
        </a>
    </li>
);

export default NoteListItem;