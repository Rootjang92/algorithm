// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.


function solution(s) {
 const p = s.split('').filter(v => ['p', 'P'].includes(v));
 const y = s.split('').filter(v => ['y', 'Y'].includes(v));
 return p.length === y.length;
}

console.log(solution('pPoooyY')); // true
console.log(solution('abcd')); // true
console.log(solution('apple')); // false


// includes
// 배열에 특정 요소가 포함되어 있는지 여부를 확인하여 적절하게 true 또는 false를 반환

// split
// 문자열 분할(separator, limit), limit으로 최대 분할 개수를 정한다. 기본값은 전체