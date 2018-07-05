// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. 
// For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. 
// Return True if and only if A can become B after some number of shifts on A.

//Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false

function rotateString(A, B) {
  const l = A.length;
  const t = B[0];

  for(let i = 0; i < l; i++) {
    const c = A[i];
    if(c !== t) {
      continue;
    }
    const str = A.substr(i) + A.substr(0, i); // A의 i번째 추출 + 0부터 i번째 까지 추출.
    if(str === B) { // str이 B와 같으면.
      return true;
    }
  }
  return false;
}
console.log(rotateString('abcde', 'cdeab')); // true
console.log(rotateString('abcde', 'abced')); // false 
