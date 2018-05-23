function reverse(str){
  var string = "";
  // var strReverse = string.split(',');
  for (var i in str){
    // for(var i=0; i<str.length-1-i; i++)
    string += str[str.length-1-i];
  }
  return string;
}

console.log(reverse('hello'));