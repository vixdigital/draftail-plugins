import PropTypes from 'prop-types';
import React from 'react';
import { ToolbarButton } from '../lib';
import readinglevel from './helpers/readinglevel';

const TOOLBAR_ICON = null;

/*
 * A  control that displays the reading age of the content inside this rich text field.
 */
const ReadingLevel = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = readinglevel(text);
    
    if(!stats) {
        var message = "Reading Age: N/A"
    }
    else {
        var message = "Reading Age: " + stats.age;
    }

    return (
        <ToolbarButton
            name="READING_LEVEL"
            icon={TOOLBAR_ICON}
            label={`${message}`}
            onClick={() => {
                // eslint-disable-next-line no-alert
                window.alert(`Reading age: ${stats.age}, Readability Score: ${stats.score}`)
            }}
        />
    );
};

ReadingLevel.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default ReadingLevel;