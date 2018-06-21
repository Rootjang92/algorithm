// 1. Password Check - Binary to String
//   https://www.codewars.com/kata/password-check-binary-to-string 

function decodePass( passArr, bin ){
  // Code here
  var binArr = []
      binArr =  bin.split(" ");
  var result = [];
  for (var i=0; i < binArr.length; i++){
    result.push(String.fromCharCode(parseInt(binArr[i],2)));
  };
  var pass = result.join("");
  return passArr.includes(pass) ? result.join("") : false;
};
console.log(decodePass('password321', 'admin'));


// 2. Move Zeroes 
//  Given an array nums, 
// write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for(var i = nums.length; i--;){
    if(nums[i] === 0){
      nums.splice(i,1);
      nums.push(0);
    } else {
      nums.sort(function(a, b) {return a - b});
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));

//  Example:

//  Input: [0,1,0,3,12]
//  Output: [1,3,12,0,0]
//  Note:

//  You must do this in-place without making a copy of the array.
//  Minimize the total number of operations.

//  @param {number[]} nums
//  @return {void} Do not rturn anything, modify nums in-place instead.

// var moveZeroes = function (nums) {

// };

// 3. Maximum Product
//   https://www.codewars.com/kata/maximum-product

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
   var myWord = /[A-Z]/g;
   if(word = myWord.test(word)){
     return true;
   } else {
     return false;
   }
};
console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('usa'));


















// 4. 두 개의 파라미터로 전달되는 문자열 중 중복되는 문자열의 유무를 파악해서 true, false로 반환합니다. 
// function harmlessRansomNote(noteText, magazineText){}
// return noteIsPossible;


// 5. Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// Example 1:

// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// 6. Add Digits    
//  Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

//  Example:

//  Input: 38
//  Output: 2 
//  Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//               Since 2 has only one digit, return it.


//  @param {number} num
//  @return {number}

// var addDigits = function (num) {

// };

// 7. The goal of this exercise is to convert a string to a new string where each character in the new string is ‘(’ if that character appears only once in the original string, or ‘)’ if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// 문자를 새로운 문자열로 변환 하는데, 새 문자열의 각 문자가 원본 문자열에 한번만 나타나면 ‘(’ 반영
// 중복될 경우 ‘)’ 반영.  (대소문자는 무시)
// ex)
// “din” => “(((”
// “recede” => “()()()”
// “Success” => “)())())”
// “(( @” => “))((”


// 8. 단어 목록이 있으면 아래 이미지와 같이 한 줄의 미국식 키보드에서만 알파벳 문자를 사용하여 입력 할 수있는 단어를 반환하십시오 .

// 미국식 키보드

// 예제 1 :
// 입력 : [ "Hello", "Alaska", "Dad", "Peace"]
// 출력 : [ "Alaska", "Dad"]

// 9. Detect Capital    
//  Given a word, you need to judge whether the usage of capitals in it is right or not.

//  We define the usage of capitals in a word to be right when one of the following cases holds:

//  All letters in this word are capitals, like “USA”.
//  All letters in this word are not capitals, like “leetcode”.
//  Only the first letter in this word is capital if it has more than one letter, like “Google”.
//  Otherwise, we define that this word doesn’t use capitals in a right way.
//  Example 1:
//  Input: “USA”
//  Output: True
//  Example 2:
//  Input: “FlaG”
//  Output: False
//  Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.


//  @param {string} word
//  @return {boolean}

// var detectCapitalUse = function (word) {

// };

// 10. Dominant array elements
//   https://www.codewars.com/kata/dominant-array-elements/train/javascript


// 11. 10미만의 자연수에서 3과 5의 배수를 구하면 3,5,6,9이다. 이들의 총합은 23이다.
// 1000미만의 자연수에서 3,5의 배수의 총합을 구하라.