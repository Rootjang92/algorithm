// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.



function solution(arr, divisor) {
  const res = arr.filter(el => el % divisor === 0); // 딱떨어지는 수만 filter로 배열 만들기
  return res.length ? res.sort((a,b) => a - b) : [-1]; // 길이가 있으면 오름차순 정렬 아니면 -1 담아 리턴하기.
}

console.log(solution([5,9,7,10],5)); // [5, 10]
console.log(solution([2,3,7,8],5)); // [-1]