// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {
  return s.split(' ').map(w => {
    return w.split('').map((v,i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
  }).join(' ');
}

console.log(solution("try Hello World")); // TrY HeLlO WoRlD



// 정규식 사용하기
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}