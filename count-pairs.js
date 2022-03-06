// add whatever parameters you deem necessary


function countPairs(arr, target) {
    let numSet = new Set(arr);
    let counter = 0;

    for(let num of arr){
        let missingVal = target - num;
        numSet.delete(num);
        if(numSet.has(missingVal)){
            counter++;
        }
    }
    return counter;
}

module.exports = { countPairs }
