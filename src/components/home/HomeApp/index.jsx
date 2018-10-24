import React from 'react';

import './home-app.css';

import SideMenu from '../SideMenu';
import NoteList from '../NoteList';
import CurrentNote from '../CurrentNote';

const HomeApp = () => (
    <div className="homeApp">
        <SideMenu />
        <NoteList />
        <CurrentNote />
    </div>
);

export default HomeApp;