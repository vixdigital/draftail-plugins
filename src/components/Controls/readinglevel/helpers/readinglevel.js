'use strict';

function readingLevel(text) {
    // Constants for our reading level calculation
    // These are part of the Automated Readability Index calculation
    // https://en.wikipedia.org/wiki/Automated_readability_index
    var CHARACTER_WEIGHT = 4.71;
    var SENTENCE_WEIGHT = 0.5;
    var BASE = 21.43;

    // Turn the html into plain text
    var text = text;

    // Create the variables to hold the character, word and sentence counts
    var charCount = 0;
    var wordCount = 0;
    var sentenceCount = 0;
    
    var textClean = text.replace(/[^a-zA-Z ]/g, "");
    
    // Calculate the character count
    var textNoSpace = textClean.replace(/\s/g, "");
    var textNoPeriod = textNoSpace.replace(/\./g, "");
    charCount = textNoPeriod.length; 

    // Calculate the word count -----------------
    var wordArray = textClean.split(" ");
    var wordArrayNoSpaces = wordArray.filter(v=>v!='');
    wordCount = wordArrayNoSpaces.length;

    // Calculate the sentence count
    sentenceCount = (text.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length) - 1;

    // If we have an empty first value in the array we know our text box is actually empty
    // so we need to minus 1 from our word count
    if(text.split(" ")[0] == "") {
        wordCount -= 1;
    }

    var readabilityScore = (CHARACTER_WEIGHT * (charCount / wordCount)) 
        + (SENTENCE_WEIGHT * (wordCount / sentenceCount)) - BASE;

    var readingAge = (readabilityScore + 4).toFixed(1);
    // Modify the help area to include the new information
    if (isFinite(readingAge)) {
        if (readingAge > 18) { readingAge = "18+" }
        return {
            age: readingAge,
            score: readabilityScore,
            words: wordCount,
            sentences: sentenceCount
        };
    }
    else {
        return null;
    }
}

/**
 * Export
 */
module.exports = readingLevel;
