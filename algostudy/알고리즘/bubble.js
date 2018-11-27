var bubbleSort = function(array) {
  var length = array.length;
  var i, j, temp;
  for(i = 0; i < length; i++) { // 순차 비교를 위한 반복문
    for(j = 0; j < length; j++) { // 끝까지 다 돌고 처음부터 다시 비교
      if (array[j] > array[j + 1]) { // 두 수를 비교
        temp = array[j]; // 두 수를 바꿔줌
        array[j] = array[j + 1];
        array [j + 1] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort([5,1,7,6,4,3,2,9])); // [ 1, 2, 3, 4, 5, 6, 7, 9 ]