// 첫 번째와 마지막 글자를 제외하고 출력하시오.

function middleCharacter(str){
  // var str;
  // str.slice[-1.-1];
  var str_split = str.split("");
  var str_result = "";
  for(var i in str_split){
    if(i > 0 && i < str_split.length-1){
      str_result += str_split[i];
    }
  }
return str_result;  
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(middleCharacter('thellot'));

// 출력 예시
// hello