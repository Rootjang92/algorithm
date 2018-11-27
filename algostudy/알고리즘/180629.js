// fizzbuzz

// var arr = [];
// var fb = Array.apply(null, Array(100)).map(function() {
//   return Math.round(Math.random() * 100) + 1;
// });

// var fizzbuzz = function(i) {
//   if ( i % 15 === 0 ) {
//     return 'fizzbuzz'
//   } else if ( i % 5 === 0 ) {
//     return 'buzz'
//   } else if ( i % 3 === 0) {
//     return 'fizz'
//   } else {
//     return i;
//   };
// };
// fb.sort(function(a, b) {
//   return a - b;
// });
// console.log(fb.map(fizzbuzz));

function fizzbuzz (n) {
  var arr = [];

  for(var i = 1; i <= n; i++) {
    arr.push(i);
  }
  // console.log(arr);
   return arr.map(function (items) {
      if ( items % 15 === 0) {
        return 'fizzbuzz'
        // console.log('fizzbuzz');
      }
      else if ( items % 5 === 0) {
        return 'buzz'
        // console.log('buzz');
      }
      else if ( items % 3 === 0) {
        return 'fizz'
        // console.log('fizz');
      }
      else {
        return items;
      }
    });
  };
 console.log(fizzbuzz(15));

