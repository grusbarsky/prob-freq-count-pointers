// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) return false;

    let str1Freq = {};
    let str2Freq = {};

    for(let num of str1){
        str1Freq[num] = ++str1Freq[num] || 1;
    }

    for(let num of str2){
        str2Freq[num] = ++str2Freq[num] || 1;
    }

    for(let num in str1Freq){
        if(!str2Freq[num]){
            return false;
        }
        if(str1Freq[num] !== str1Freq[num]){
            return false;
        }

        return true;
    }
}

module.exports = {sameFrequency};
