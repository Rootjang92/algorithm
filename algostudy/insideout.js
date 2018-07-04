// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
// By this I mean the internal letters will move out, and the external letters move toward the centre.
// If the word is even length, all letters will move. 
// If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:
// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x){
  let insidesplit = x.split(' ');
  let resArr = [];

  insidesplit.forEach(i => {
    if (i.length > 3) {
      resArr.push(inString(i))
    } else {
      resArr.push(i);
    }
  });

  function inString(str) {
    let splitstr = str.split('');
    let strlen = Math.floor(str.length / 2);
    for(let i=0; i < str.length; i++) {
      splitstr[i] = str[strlen - 1 - i];
      splitstr[str.length - 1 -i] = str[str.length - strlen + i];
    }
    return splitstr.join('');
  } 
  return resArr.join(' ');
}

console.log(insideOut('what time are we climbing up the volcano'));






// function insideOut(x){
//   // let inside = '';
//   let insidesplit = x.split(' '); // ex) taxi -> 'ta' -> 'at'  , 'xi' -> 'ix'
//   let insideArr = []; 

//   insideArr.forEach(i => {
//     if (i.length > 3) {
//       insiderArr.push(inString(i)); 
//     } else {
//       insideArr.push(i);
//     }
//   });

//   function inString(str) {
//     let inS = str.split('');
//     let strlen = Math.floor(str.length / 2); // if str.length 4 = 2, 5 = 2.
//       for(let j=0; j < str.length; j++) {
//         inS[j] = str[strlen -1 - j]; // ex) taxi -> str[0] = t -> str[strlen -1 + i] = a 
//         inS[str.length -1 -j] = str[str.length - strlen + j];
//       }
//     return inS.join('');
//     }
//   return insideArr.join(' ');
// };

// console.log(insideOut('what time are we climbing up the volcano'));

