function solution(a, b) {
  return (a+b) * ((a > b ? a - b : b - a) + 1) / 2
}

console.log(solution(3,7)); // 25


// another things

// function adder(a, b){
//   var result = 0
//   //함수를 완성하세요


//   return (a+b)*(Math.abs(b-a)+1)/2;
// }


// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( adder(3, 5) )


// function adder(a, b, s = 0){
//   for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//   return s;
// }


// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( adder(3, 5) )
