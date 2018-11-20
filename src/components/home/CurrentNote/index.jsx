import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown/with-html';

import * as selectors from '../../../reducers';


import './current-note.css';

const CurrentNote = ({
    title,
    body
}) => (
    <div className="currentNote">
        <ReactMarkdown
            source={`# ${title ? title: ''}\n-------------\n\n${body ? body: ''}`}
            escapeHtml={false} />
    </div>
);

export default connect(
    state => {
        const { title, body } = selectors.getCurrentNoteFull(state);
        return {
            title,
            body,
        }
    },
    undefined,
)(CurrentNote);