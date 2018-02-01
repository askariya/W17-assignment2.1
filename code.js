//
// this is just a stub for a function you need to implement
//
function getStats(txt) {

    let nChars = txt.length; // Calculate number of characters
    let nWords = calculateWordCount(txt); // Calculate number of words

    let line_values = calculateLines(txt); 


    return {
        text: txt,
        nChars: nChars,
        nWords: nWords,
        nLines: line_values.count,
        nNonEmptyLines: line_values.ne_count,
        // averageWordLength: 3.3,
        maxLineLength: line_values.max_line_length,
        // palindromes: ["12321", "kayak", "mom"],
        // longestWords: ["xxxxxxxxx", "123444444"],
        // mostFrequentWords: ["hello(7)", "world(1)"]
    };
}


function calculateWordCount(txt){
    word_list = txt.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').filter(x => x); //replaces all special characters with spaces
    count = word_list.length;
    word_length_total = 0; 
    for(i = 0; i < word_list.length; i++){
        //TODO
    } 

    return count;
}

//let result = (txt.match(/\n/g) || []).length + 1;

function calculateLines(txt){
    let ne_count = 0;
    let max_line_length = 0;

    lines = txt.split('\n');
    for (i = 0; i < lines.length; i++) {
        if(lines[i] != ""){
            ne_count++;
        }
        // if the line length is greater than the max line length,
        // assign a new max
        if(lines[i].length > max_line_length){
            max_line_length = lines[i].length;
        }
    }

    return{
        ne_count: ne_count,
        count: lines.length,
        max_line_length: max_line_length,
    };

    // return ne_count;
}
