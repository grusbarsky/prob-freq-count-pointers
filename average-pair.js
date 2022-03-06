
// add whatever parameters you deem necessary
function averagePair(arr, num) {
    // pointers at beginning and end
    let left = 0;
    let right = arr.length - 1;

    // if pointers cross, return false
    while(left < right){
        // take average of both pointer
        let avg = (left + right) / 2;

        // if average =, return true
        // if avergae too small, move left pointer
        // if average to large, move right pointer
        if (avg === num ){
            return true;
        } else if (avg < num){
            left++;
        } else{
            right;
        }
    }
    return false;
}

module.exports = { averagePair };
