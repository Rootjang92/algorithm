function solution(s){
  const p = s.split('').filter(v => ['p','P'].includes(v));
  const y = s.split('').filter(v => ['y','Y'].includes(v));
  return p.length === y.length;
}
// includes

console.log(solution('Hello world')); // true
console.log(solution('apple')); // false
console.log(solution('banana')); // true


// another things

// function numPY(s) {
//   return s.match(/p/ig).length == s.match(/y/ig).length;
// }


// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( numPY("pPoooyY") )
// console.log( numPY("Pyy") )

// 정규표현식