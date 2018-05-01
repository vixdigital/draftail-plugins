'use strict';

var syllable = require('syllable');

function CalculateFleschReadingEase(text) {
    // Clean up the text and create a word array from it
    var textClean = text.replace(/[^a-zA-Z ]/g, "");
    var wordArray = textClean.split(" ");
    var wordArrayNoSpaces = wordArray.filter(v=>v!='');
    var wordCount = wordArrayNoSpaces.length;

    var syllableCount = syllable(text);

    // Calculate the sentence count
    var sentenceCount = (text.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length) - 1;
    
    // Calculate Flesch Reading Ease Score
    var avgSentenceLength = wordCount / sentenceCount;
    var avgSyllablePerWord = syllableCount / wordCount;
    var fleschReadingEaseScore = 206.835 - (1.015 * avgSentenceLength) - (84.6 * avgSyllablePerWord);
    
    // Truncate as best we can to 2 decimal places
    fleschReadingEaseScore = (Math.floor(fleschReadingEaseScore * 100) / 100)
    
    // Set up the data
    var data = {
        score: isFinite(fleschReadingEaseScore) ? fleschReadingEaseScore : 0,
    }

    return data;
}

/**
 * Export
 */
module.exports = CalculateFleschReadingEase;
