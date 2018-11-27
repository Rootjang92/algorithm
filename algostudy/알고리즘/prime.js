// 시간초과

// function solution(n) {
//   const primes = [];
//   for(let j = 2; j <= n; j++) {
//       let isPrime = true;
//       const sqrt = Math.ceil(j); // 가장 작은 정수를 반환해서
//       for (let i = 0; primes[i] <= sqrt; i++) {
//           if ( j % primes[i] === 0) {
//               isPrime = false; // false면 break
//               break;
//           }
//       }
//       if (isPrime) {
//           primes.push(j); // true면 primes 배열에 푸쉬
//       };
//   }
//   return primes.length; // 그 배열에 길이값 리턴
// }

// console.log(solution(10)); // 4


// function solution(n) {
//   let count = 1;
//   if ( n == 2) {
//     count = 1;
//   } else {
//     for (let i = 3; i <= n; i++) {
//       let prime = true;
//       for(let j = 2; j < i; j++) {
//         if (i % j !== 0) {
//           prime = true;
//         } else {
//           prime = false;
//           break;
//         }
//       }
//       if (prime) { count++ }
//     }
//     return count;
//   };
// };

// console.log(solution(10));

function solution(n) {
  var primes = [];

  if (n < 2) {
    return false;
  }

  for (var j = 2; j <= n; j++) {
    var isPrime = true;
    var q = Math.floor(Math.sqrt(n));

    for (var i = 0; primes[i] <= q; i++ ) {
      if ( j % primes[i] === 0 ) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(j);
    }
  }
  return primes.length;
}

console.log(solution(10)); // 4