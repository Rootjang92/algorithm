const inSertion = arr => {
  let temp, j;
  for(let i = 0; i < arr.length; i++) {
    temp = arr[i];
    j = i;
    while(j > 0 && arr[j-1] > temp) { // temp 값이 더 클 때까지 반복문을 돌린다.
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

console.log(inSertion([7,6,5,1,3])); // 1,3,5,6,7