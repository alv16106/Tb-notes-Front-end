import React from 'react';

import './note-list-item.css';

const NoteListItem = ({
    title,
    color,
}) => (
    <li className="itemNoteContainer">
        <a className="itemNote">
            <i className={`icon far fa-file-alt`}></i>
            <p className="title"> { title } </p>
            <div className="color" style={{background: color}}> </div>
        </a>
    </li>
);

export default NoteListItem;