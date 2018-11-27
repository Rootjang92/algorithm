// 자연수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  return Array(n).fill().map((value, index) => index + 1).reduce((a,c) => n % c ? a : a + c, 0)
  // 나눠지면 나눈 값을 더하고 아니면 이전 값을 사용
}

console.log(solution(10)); // 18


// 다른 사람의 풀이

let sumDivisor = num => {

  let answer = 0,
      i = 1,
      j = num%2 == 0 ? 1 : 2

  for(i; i<num; i=i+j) if(num%i == 0) answer += i

  return answer+num
}

console.log(sumDivisor(10)); // 18