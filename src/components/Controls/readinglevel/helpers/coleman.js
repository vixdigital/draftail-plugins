'use strict';

function CalculateColemanIndex(text) {
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

    // Calculate Coleman-Liau index
    var L = (charCount / wordCount) * 100;
    var S = (sentenceCount / wordCount) * 100;
    var CLI = ((0.0588 * L) - (0.296 * S)) - 15.8;
    
    // Truncate as best we can to 2 decimal places
    CLI = (Math.floor(CLI * 100) / 100)
    
    // Set up the data
    var data = {
        index: isFinite(CLI) ? CLI : 0,
    }

    return data;
}

/**
 * Export
 */
module.exports = CalculateColemanIndex;
