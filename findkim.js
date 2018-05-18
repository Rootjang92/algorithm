function findkim(seoul){
  var index = 0;
  for(var i=0; i < seoul.length; i++){
    if(seoul[i] === "kim"){
      index = i;
    }
  }

return "kim은 " + index + "번 째에 있다.";
}
console.log(findkim(["Lee", "park", "kim"]))