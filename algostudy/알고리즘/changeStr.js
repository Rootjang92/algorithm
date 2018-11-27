// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

function solution(s) {
  return parseInt(s);
}

console.log(solution('apple')); // NaN
console.log(solution('1234')); // 1234

// parseInt 문자열 인자의 구문을 분석해 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 리턴합니다.