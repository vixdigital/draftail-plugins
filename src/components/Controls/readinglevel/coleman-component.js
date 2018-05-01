import PropTypes from 'prop-types';
import React from 'react';
import { ToolbarButton } from '../lib';
import CalculateColemanIndex from './helpers/coleman';

const TOOLBAR_ICON = null;

/*
 * A control that displays the coleman liau index of the content inside this rich text field.
 */
const ColemanLiau = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = CalculateColemanIndex(text);
    
    if(!stats) {
        var message = "CL Index: N/A"
    }
    else {
        var message = "CL Index: " + stats.index;
    }

    return (
        <ToolbarButton
            name="COLEMAN_LIAU"
            icon={TOOLBAR_ICON}
            label={`${message}`}
        />
    );
};

ColemanLiau.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default ColemanLiau;
