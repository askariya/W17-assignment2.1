//
// this is just a stub for a function you need to implement
//SHould review this: https://vincent.billey.me/pure-javascript-immutable-array/

function getStats(txt) {

    let nChars = txt.length; // Calculate number of characters
    let word_values = calculateWords(txt); // Calculate values pertaining to words
    let line_values = calculateLines(txt);  // Calculate values pertaining to lines
    let word_freqs = calculateWordFreq(txt); // Calculate word frequency


    return {
        text: txt,
        nChars: nChars,
        nWords: word_values.count,
        nLines: line_values.count,
        nNonEmptyLines: line_values.ne_count,
        averageWordLength: word_values.avg_length,
        maxLineLength: line_values.max_line_length,
        palindromes: word_values.palindromes,
        longestWords: word_values.top_ten_words,
        mostFrequentWords: word_freqs
    };
}

/*
    Calculates Word Freq and returns result in an array
*/
function calculateWordFreq(txt){
    word_freqs = []; // array of pairs to hold words and counts

    let words = txt.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').filter(x => x);
    words = words.sort(function(a, b) {
        return a.localeCompare(b); // sort by dictionary order
    });

    // converts every value in words to lowercase
    words = words.map(word => word.toLowerCase()); 

    let prev_word = null;
    let count = 0;

    // calculate word frequency
    for(i = 0; i < words.length; i++){
        if(prev_word == null){
            prev_word = words[i];
            count = 1;
        }
        else if(prev_word == words[i]){
            count++;
        }

        else if(prev_word != words[i]){
            word_freqs.push([prev_word, count]);
            prev_word = words[i];
            count = 1;
        }
    }
    word_freqs.push([prev_word, count]);

    word_freqs.sort(function(a, b) {
        return b[1] - a[1] || // sort by count
                a[0].localeCompare(b[0]); // then sort by alphabetical order
    });

    // reformat array to be strings in the stylized format
    for (i = 0; i < word_freqs.length; i++){
        word_freqs[i] = word_freqs[i][0] + "(" + word_freqs[i][1] + ")";
    }

    word_freqs = word_freqs.slice(0,10); // get top 10

    return word_freqs;
}

function calculateWords(txt){
    //replaces all special characters with spaces
    let words = txt.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').filter(x => x);
    let word_length_total = 0; 
    let palindromes = [];
    let top_ten_lwords = [];

    for(i = 0; i < words.length; i++){
        // total up word length
        word_length_total += words[i].length; 
        //check if palindrome
        if(words[i].length > 2){

            reverse_word = words[i].split('').reverse().join('');
            if (words[i] == reverse_word){
                palindromes.push(words[i]);  
            } 
        }
    } 
    //calculate average word length
    let avg_word_length = word_length_total/words.length;

    //find top 10 words
    // sort function referred to from here: 
    // https://stackoverflow.com/questions/10630766/sort-an-array-based-on-the-length-of-each-element
    top_ten = words.sort(function(a, b) {
        return b.length - a.length || // sort by length, if equal then
               a.localeCompare(b);    // sort by alphabetical order
    });
    top_ten = top_ten.slice(0,10); // get top 10

    return {
        count: words.length,
        avg_length: avg_word_length,
        palindromes: palindromes,
        top_ten_words: top_ten
    };
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
}
