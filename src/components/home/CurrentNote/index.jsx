import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown/with-html';

import * as selectors from '../../../reducers';


import './current-note.css';

const CurrentNote = ({
    body
}) => (
    <div className="currentNote">
        <ReactMarkdown
            source={`${body ? body : ''}`}
            escapeHtml={false} />
    </div>
);

export default connect(
    state => ({
        body: selectors.getCurrentNoteFull(state),
    }),
    undefined,
)(CurrentNote);