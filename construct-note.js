// add whatever parameters you deem necessary

// return true is msg can be built with letters
// return false if it cannot
// Time complexity O(m + n)
function constructNote(msg, chars) {
    const msgFreq = {};
    const charsFreq = {};

    // Loop through strings, add freuency
    for(let char of msg){
        msgFreq[char] = ++msgFreq[char] || 1;
    }

    for(let char of chars){
        charsFreq[char] = ++charsFreq[char] || 1;
    }

    // loop through msgFreq
    for(let char in msgFreq){
        // check if char in charsFreq
        // if no, return false
        if(!charsFreq[char]){
            return false;
        }
        // if yesm check msgFreq[char] >= charsFreq[char]
        if(msgFreq[char] > charsFreq[char]){
            return false;
        }
    }
    return true;
}

module.exports = {constructNote};