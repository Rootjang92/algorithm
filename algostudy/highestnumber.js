// Write a method highestRank(arr) (or highest-rank in clojure)
// which returns the number which is most frequent in the given input array (or ISeq).
// If there is a tie for most frequent number, return the largest number of which is most frequent.

function highestRank(arr){
  //Your Code logic should written here
  let obj = {};
  arr.forEach(elem => {
    if(obj[elem] === undefined)
    obj[elem] = 0;
    obj[elem]++;
  });
  let keys = Object.keys(obj), highest = 0, key=''; // 직접 열거된 요소의 배열 반환.
  keys.forEach(elem => {
    if(obj[elem] >= highest) { // obj의 요소가 변수 highest보다 크면.
      highest = obj[elem];
      key = elem;
    }
  });
  // console.log(keys);
  return parseInt(key);
};
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));