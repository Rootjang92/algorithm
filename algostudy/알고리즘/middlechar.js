// 가운데 글자만 출력하게 한다. 글자가 짝수이면 가운데 2개가 출력되게 해라.
// substr(특정한 문자열 반환), Math.ceil(인수보다 크거나 같은 정수 중 가장 작은 정수 반환), Math.floor(가장 큰 정수 반환)

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
};

console.log(solution('abcde'));
console.log(solution('banana'));



// another thing

// function solution(s) {
//     return s.length % 2 == 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(Math.floor(s.length / 2), 1);
// }

// console.log(solution("abcde"));
// console.log(solution("abcdefgh"));



// function solution(s) {
//   var length = s.length;
//   var answer = '';

//   if(!(s.length >0 && s.length<100)) {
//       return;
//   }

//   if(length % 2 != 0) {
//       answer += s.slice(length/2, length/2 +1);
//   }else {
//       answer += s.slice(length/2 -1, length/2 +1);
//   }

//   return answer;

// }

// var s = 'qwerty';
// console.log(solution(s));