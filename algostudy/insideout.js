// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
// By this I mean the internal letters will move out, and the external letters move toward the centre.
// If the word is even length, all letters will move. 
// If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:
// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// function insideOut(x){
//   let insideArr = x.split(' ');
//   let resArr = [];

//   insideArr.forEach(i => {
//     if (i.length > 3) {
//       resArr.push(inString(i))
//     } else {
//       resArr.push(i);
//     }
//   });

//   function inString(str) {
//     let splitstr = str.split('');
//     let strlen = Math.floor(str.length / 2);
//     for(let i=0; i < strlen; i++) {
//       splitstr[i] = str[strlen - 1 - i];
//       splitstr[str.length - 1 - i] = str[str.length - strlen + i];
//     }
//     return splitstr.join('');
//   } 
//   return resArr.join(' ');
// }

// console.log(insideOut('what time are we climbing up the volcano'));


function insideOut(x) {
  let res = s => [...s].reverse().join(''); // s배열 분배해서 리버스 후 조인.
  let flip = w => {
    let l = w.length / 2 | 0, r = w.length - l // 변수 l은 w.length / 2 이거나 0이고 r은 w의 배열길이에 - l
    return res(w.slice(0,l)) + w.slice(l, r) + res(w.slice(r)) // 변수 res 일때 매개변수 w를 l부터 r까지 슬라이스 + 변수 res의 w를 r번째 까지 슬라이스.
  }
  return x.split(' ').map(flip).join(' ');  // 매개변수 x를 split한 걸 다시 조인해서 새 배열에 반영.
}
console.log(insideOut('what time are we climbing up the volcano'));





