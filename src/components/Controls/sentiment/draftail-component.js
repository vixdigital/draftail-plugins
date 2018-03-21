import PropTypes from 'prop-types';
import { ToolbarButton } from '../lib';
import sentiment from 'sentiment';

import React from 'react';
var toolbar_icon = [
    "M6.75,10.5h4.5v1.13H6.75ZM11.63,6A1.13,1.13,0,1,1,10.5,7.13,1.13,1.13,0,0,1,11.63,6ZM6.38,6A1.13,1.13,0,1,1,5.25,7.13,1.12,1.12,0,0,1,6.38,6ZM9,1.5A7.5,7.5,0,1,0,16.5,9,7.5,7.5,0,0,0,9,1.5ZM9,15a6,6,0,1,1,6-6A6,6,0,0,1,9,15Z"
]
var message = " Neutral";
/*
 * A control that displays sentiment analysis results for entered text.
 */
const SentimentAnalysis = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = sentiment(text);
    
    // If no stats we might want to let the user know there's not enough data for a calculation or
    // show the neutral score.
    if(!stats) {
        var message = " Neutral";
        var toolbar_icon = [
            "M6.75,10.5h4.5v1.13H6.75ZM11.63,6A1.13,1.13,0,1,1,10.5,7.13,1.13,1.13,0,0,1,11.63,6ZM6.38,6A1.13,1.13,0,1,1,5.25,7.13,1.12,1.12,0,0,1,6.38,6ZM9,1.5A7.5,7.5,0,1,0,16.5,9,7.5,7.5,0,0,0,9,1.5ZM9,15a6,6,0,1,1,6-6A6,6,0,0,1,9,15Z"
        ]
    }
    else {
        var message = " Neutral";
        var iconPath = [
            "M6.75,10.5h4.5v1.13H6.75ZM11.63,6A1.13,1.13,0,1,1,10.5,7.13,1.13,1.13,0,0,1,11.63,6ZM6.38,6A1.13,1.13,0,1,1,5.25,7.13,1.12,1.12,0,0,1,6.38,6ZM9,1.5A7.5,7.5,0,1,0,16.5,9,7.5,7.5,0,0,0,9,1.5ZM9,15a6,6,0,1,1,6-6A6,6,0,0,1,9,15Z"
        ]
        if(stats.score < -5) { 
            iconPath = "M9,1.5A7.5,7.5,0,1,0,16.5,9,7.49,7.49,0,0,0,9,1.5ZM9,15a6,6,0,1,1,6-6A6,6,0,0,1,9,15Zm3.14-9.18-.79.79-.79-.79-.8.79.79.79-.79.8.8.8.8-.79.79.79.79-.79-.79-.79.79-.79ZM5.87,9l.79-.79L7.45,9l.8-.8-.8-.79.8-.8-.8-.79-.79.79-.79-.79-.79.79.79.79-.79.79ZM9,10.5a4.12,4.12,0,0,0-3.83,2.63h7.67A4.12,4.12,0,0,0,9,10.5Z";
            message = " V. Negative";
        }
        else if(stats.score < 0) { 
            iconPath = "M11.63,6A1.13,1.13,0,1,1,10.5,7.13,1.13,1.13,0,0,1,11.63,6ZM6.38,6A1.13,1.13,0,1,1,5.25,7.13,1.12,1.12,0,0,1,6.38,6ZM9,1.5A7.5,7.5,0,1,0,16.5,9,7.5,7.5,0,0,0,9,1.5ZM9,15a6,6,0,1,1,6-6A6,6,0,0,1,9,15Zm0-4.5a4.12,4.12,0,0,0-3.84,2.63H6.41a3,3,0,0,1,5.17,0h1.25A4.12,4.12,0,0,0,9,10.5Z";
            message = " Negative";
        }
        else if(stats.score > 5) { 
            iconPath = "M9,1.5A7.5,7.5,0,1,0,16.5,9,7.49,7.49,0,0,0,9,1.5ZM9,15a6,6,0,1,1,6-6A6,6,0,0,1,9,15Zm.75-7.55.8.8.8-.79.79.79.79-.79L11.34,5.87Zm-3.09,0,.79.8.8-.8L6.66,5.87,5.07,7.45l.79.8ZM9,13.13a4.12,4.12,0,0,0,3.83-2.62H5.17A4.12,4.12,0,0,0,9,13.13Z";
            message = " V. Positive";
        } 
        else if(stats.score > 0) { 
            iconPath = "M11.63,6A1.13,1.13,0,1,1,10.5,7.13,1.13,1.13,0,0,1,11.63,6ZM6.38,6A1.13,1.13,0,1,1,5.25,7.13,1.12,1.12,0,0,1,6.38,6ZM9,1.5A7.5,7.5,0,1,0,16.5,9,7.5,7.5,0,0,0,9,1.5ZM9,15a6,6,0,1,1,6-6A6,6,0,0,1,9,15Zm0-3a3,3,0,0,1-2.59-1.5H5.16a4.12,4.12,0,0,0,7.68,0H11.59A3,3,0,0,1,9,12Z";
            message = " Positive";
        }
        // //var message = "Sentiment Score: " + stats.score;

        toolbar_icon = iconPath;
    }

    return (
        <ToolbarButton
            name="SENTIMENT_ANALYSIS"
            icon={toolbar_icon}
            label={`${message}`}
            onClick={() => {
                // on click functionality here
                console.log(stats);
            }}
        />
    );
};

SentimentAnalysis.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default SentimentAnalysis;