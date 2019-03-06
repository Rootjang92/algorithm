// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.


function isPrime(num) {
  // num이 소수인지 아닌지 검사.
  let flag = true;
  for (let i = 2; i*i <= num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function solution(nums) {
  let answer = 0;
  let num, size = nums.length;

  for(let i = 0; i < size; i++) {
    for (let j = i+1; j < size; j++) {
      for (let k = j+1; k < size; k++) {
        num = nums[i] + nums[j] + nums[k];
        if(isPrime(num)) answer++;
      }
    }
  }
  return answer;
}

console.log(solution([1,2,3,4]));



// another answer

function test(num, answer) {
  var half = Math.floor(num / 2),
      successful = true;

  for(var i = 2; i <= half; i++) {
      if(num % i == 0) {
          successful = false;
          break;
      };
  };

  return successful ? answer + 1 : answer;
};

function solution(nums) {
  var answer = 0,
      length = nums.length;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  for(var i = 0; i < length; i++) {
      for(var k = i + 1; k < length; k++) {
          for(var j = k + 1; j < length; j++) {
            answer = test(nums[i] + nums[j] + nums[k], answer);
          };
      };
  };

  return answer;
}
