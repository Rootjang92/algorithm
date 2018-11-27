function solution(strings, n) {
  return strings.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
};

console.log(solution(['abc','apple','bed'],1));


// localeCompare 메서드
// 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴



// another things


// function solution(strings, n) {
//   return strings.sort((a, b) => {
//       const chr1 = a.charAt(n);
//       const chr2 = b.charAt(n);

//       if (chr1 == chr2) {
//           return (a > b) - (a < b);
//       } else {
//           return (chr1 > chr2) - (chr1 < chr2);
//       }
//   })
// }


// charAt(); 문자열에서 특정 위치의 문자를 반환



