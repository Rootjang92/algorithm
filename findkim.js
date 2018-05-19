function findkim(seoul){
  var index = 0;
  for(var i=0; i < seoul.length; i++){
    if(seoul[i] === "kim"){
      index = i;
    }
  }
// for문 설정하면서 변수 i를 선언하여 seoul 배열의 길이를 받아옴.
return "kim은 " + index + "번 째에 있다.";
}
console.log(findkim(["Lee", "park", "kim"]))