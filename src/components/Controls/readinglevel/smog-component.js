import PropTypes from 'prop-types';
import React from 'react';
import { ToolbarButton } from '../lib';
import CalculateSmogIndex from './helpers/smogindex';

const TOOLBAR_ICON = null;

/*
 * A  control that displays the smog index of the content inside this rich text field.
 */
const SmogIndex = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = CalculateSmogIndex(text);
    
    if(!stats) {
        var message = "SMOG Index: N/A"
    }
    else {
        var message = "SMOG Index: " + stats.smogIndex;
    }

    return (
        <ToolbarButton
            name="SMOG_INDEX"
            icon={TOOLBAR_ICON}
            label={`${message}`}
        />
    );
};

SmogIndex.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default SmogIndex;
