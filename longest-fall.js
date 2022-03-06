// add whatever parameters you deem necessary
function longestFall(arr) {
    let maxCount = 0;
    // take in account an array of 1
    let counter = 1;

    for(i=0; i < arr.length; i++){
        if(arr[i] > arr [i+1]){
            counter++;
        }else{
            if(counter > maxCount){
                maxCount = counter;
                counter = 1;
            }
        }
    }
    return maxCount;
}

module.exports = {longestFall}