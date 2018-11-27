function solution(arr, divisor) {
  const res = arr.filter(el => el % divisor === 0);
  return res.length ? res.sort((a,b) => a - b) : [-1];
};

console.log(solution([2,5,7,10], 5));



// another thing

// function solution(arr, divisor) {
//   var answer = [];
//   arr.map((o) => {
//       o % divisor === 0 && answer.push(o);
//   })
//   return answer.length ? answer.sort((a, b) => a - b) : [-1];

// }


