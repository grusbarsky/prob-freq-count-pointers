// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(arr[left] < 0 && arr[right] > 0){
            let leftTemp = left;

            arr[left] = arr[right];
            arr[right] = temp;

            left += 1;
            right -=1;
        }else{
            if(arr[left > 0]){
                left += 1;
            }else{
                right -= 1;
            }
        }
    }
    return arr;
}

module.exports = {separatePositive};
