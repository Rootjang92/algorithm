// 배열 arr에 중복되어 있는 숫자 제거.

function solution(arr)
{
    return arr.filter((n,i) => n !== arr[i + 1]);
}

console.log(solution([1,1,2,3,4,4]));



// another thing

function solution(arr) {
  var answer = [arr[0]];

  for (let i=1; i<arr.length; i++) {
      if (answer[answer.length - 1] !== arr[i]) {
          answer.push(arr[i]);
      }
  }

  return answer;
}