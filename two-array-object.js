// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};

    for(let key of keys){
        obj[key] = values[keys.indexOf(key)] || null;
    }
    return obj;

    // loop through keys, creating key value pair
    // value will be determined by key index
    // no key, || null
}

module.exports = {twoArrayObject};