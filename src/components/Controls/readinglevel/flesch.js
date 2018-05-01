import PropTypes from 'prop-types';
import React from 'react';
import { ToolbarButton } from '../lib';
import CalculateFleschReadingEase from '../lib/helpers/flesch';

const TOOLBAR_ICON = null;

/*
 * A  control that displays the smog index of the content inside this rich text field.
 */
const FleschReadingEase = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = CalculateFleschReadingEase(text);
    
    if(!stats) {
        var message = "Flesch Score: N/A"
    }
    else {
        var message = "Flesch Score: " + stats.score;
    }

    return (
        <ToolbarButton
            name="SMOG_INDEX"
            icon={TOOLBAR_ICON}
            label={`${message}`}
        />
    );
};

FleschReadingEase.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default FleschReadingEase;
