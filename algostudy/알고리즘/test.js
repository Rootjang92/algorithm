// missinglnteger

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const arr = [];
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > 0) {
//       arr[A[i]] = true;
//     }
//   }

//   for (let i = 1; i <= arr.length; i++) {
//     if (!arr[i]) {
//       return i;
//     }
//   }

//   return 1;
// }

// console.log(solution([1,2,3]));
// console.log(solution([-1,-3]));
// console.log(solution( [1, 3, 6, 4, 1, 2]));



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


// 1.

// function solution(A, K) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   for (var i = 0; i < A.length; i++) {
//       return A.slice(i,i+1);
//   };
//   // border
//   var colborder = '-'
//   var colborderCount = arr.slice(0).sort(function(a,b){a<b})[0];
//   var colborderCountDigit = colborderCount.toString().length;
//   var cell = colborder.repeat(colborderCountDigit);
//   var tableborder = '+' + cell + '+';
//   var n = '|' + num + '|';

//   for (var j = 0; j < K; j++) {
//       return tableborder + n + tableborder
//   }

//   return tableborder + n + tableborder;
// }

// 2.

// function solution() {
//   // write your code in Javascript
//   //
//   // you can access DOM Tree using DOM Object Model:
//   //    document.getElementsByTagName
//   // or using jQuery:
//   //    $('some_tag')
//   //
//   // please note that element.innerText is not supported,
//   // you can use element.textContent instead.
//   var tr = document.getElementsByTagName('tr');
//   var td = document.getElementsByTagName('td');
//   var table = document.getElementsByTagName('TBODY');

//   if (td.style.color == td.style.backgroundColor) {
//       td.values.style.visibility = "hidden";
//   }
// }



//3

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution() {
//   // write your code in Javascript
//   //
//   // you can access DOM Tree using DOM Object Model:
//   //    document.getElementsByTagName
//   // or using jQuery:
//   //    $('some_tag')
//   var ul = document.getElementsByTagName('ul');
//   var li = document.getElementsByTagName('li');
//   var ol = document.getElementsByTagName('ol');
//   var maxCountLi = 0;
//   var maxCountOl = 0;
//   if (li.length > maxCountLi) {
//      maxCountLi = li.length;
//   };
//   if (ol.length > maxCountOl) {
//      maxCountOl = ol.length;
//   }

//   return (maxCountLi + maxCountOl) / 2;
// }