const selectSort = arr => {
  let minindex, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    minindex = i; // 정렬되지 않은 최솟값의 인덱스
    for (let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[minindex]) {
        minindex = j // 현재 최솟값보다 작은 값이 있으면 변경
      }
    }
    temp = arr[i];
    arr[i] = arr[minindex];
    arr[minindex] = temp;
  }
  return arr;
}

console.log(selectSort([3,4,1,2])); // [1,2,3,4]