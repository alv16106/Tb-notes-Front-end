import React from 'react';

import './note-list.css'

import NoteListItem from '../NoteListItem';

const NoteList = () => (
    <div className="noteList">
        <ul className="menuList scroll">
            <NoteListItem title="Lorem Ipsum" color="red"/>
        </ul>
    </div>
);

export default NoteList;