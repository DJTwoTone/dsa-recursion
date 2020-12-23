/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, curLongest = 0) {
  if (idx === words.length) return curLongest;
  curLongest = Math.max(words[idx].length, curLongest);
  return longest(words, idx + 1, curLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, eoStr = "") {
  if (idx >= str.length) return eoStr;
  eoStr += str[idx];
  return everyOther(str, idx + 2, eoStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let startIdx = idx;
  let endIdx = str.length - idx - 1;
  if (startIdx >= endIdx) return true;
  if (str[startIdx] !== str[endIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, revStr = '') {
  if (revStr.length === str.length) return revStr;
  revStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

    let strings = [];
    for (let key in obj) {
      
      if (typeof obj[key] === "string") strings.push(obj[key]);
      if (typeof obj[key] === "object") strings.push(...gatherStrings(obj[key]));

    }
    return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length) {

  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  }
  return binarySearch(arr, val, mid + 1, end)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
