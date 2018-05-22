function reverse(str){
  var string = "";
  // var strReverse = string.split(',');
  for (var i in str){
    // document.write('<p>' + strReverse[i] + '</p>')
    string += str[str.length-1-i];
  }
  return string;
}

console.log(reverse('hello'));