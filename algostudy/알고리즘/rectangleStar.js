/*
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
*/


function soltuion(n, m) {
  let result = "";
  while(m-- > 0) {
    while(n-- > 0) {
      result += '*';
    }
    n = 5;
    if (m != 0) {
      result += '\n';
    }
  }
  return result;
}

console.log(soltuion(5,3));