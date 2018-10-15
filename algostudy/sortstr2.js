function solution(s) {
  return s.split('').sort((p,c) => c.charCodeAt() - p.charCodeAt()).join('');
}

// charCodeAt()

console.log(solution('aBcDeF')); // ecaFDB


// another things

// function solution(s) {
//   return s.split('').sort((a, b) => {
//       if (a > b) return -1;
//       if (b > a) return 1;
//       return 0;
//   }).join('');
// }