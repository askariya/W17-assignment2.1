//
// this is just a stub for a function you need to implement
//
function getStats(txt) {

    let nChars = txt.length; // Calculate number of characters

    let nWords = calculateWordCount(txt.replace("\n", " "));

    return {
        nChars: nChars,
        // nWords: 22,
        // nLines: 10,
        // nNonEmptyLines: 22,
        // averageWordLength: 3.3,
        // maxLineLength: 33,
        // palindromes: ["12321", "kayak", "mom"],
        // longestWords: ["xxxxxxxxx", "123444444"],
        // mostFrequentWords: ["hello(7)", "world(1)"]
    };
}


function calculateWordCount(txt){
    var count = 0;
    string = string.replace(/[^a-zA-Z0-9]/g, ' '); //replaces all special characters
    return count;
}
