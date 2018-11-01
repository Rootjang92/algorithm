// String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.


function solution(seoul) {
  return '김서방은 ' + seoul.indexOf('Kim') + '에 있다.'
}

console.log(solution(['Jane', 'Kim'])); // 1
console.log(solution(['Kane', 'Son'])); // -1

// indexOf

// 객체에서 특정 값의 첫 번째 일치하는 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.