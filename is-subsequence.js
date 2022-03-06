// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    // if str ==== '', auto matches return true
    if (!str1) return true;
    // for length of str2
    while (str2Idx < str2.length) {
        // if char in str2 marches char in str 1, increment str1 and str2
      if (str2[str2Idx] === str1[str1Idx]) {
        str1Idx += 1;
      }
        //   when you get to the end of str1, return true
      if (str1Idx === str1.length) return true;

      str2Idx += 1;
    }
    return false;
  }

  module.exports = { isSubsequence }