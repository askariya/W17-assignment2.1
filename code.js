//
// this is just a stub for a function you need to implement
//
function getStats(txt) {

    let nChars = txt.length; // Calculate number of characters
    let nWords = calculateWordCount(txt); // Calculate number of words
    let nLines = calculateNumLines(txt); // Calculate number of lines

    return {
        text: txt,
        nChars: nChars,
        nWords: nWords,
        nLines: nLines,
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
    count = txt.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').filter(x => x).length; //replaces all special characters with spaces
    return count;
}

function calculateNumLines(txt){
    // let newl_char = /\n/;

    if (txt == ""){
        return 0;
    }
    else{
        let result = (txt.match(/\n/g) || []).length + 1;
        return result;  
    }
}
