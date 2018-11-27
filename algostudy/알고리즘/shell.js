const shellSort = arr => {
  let len = arr.length;
  let h = len, i, j, temp;

  while(Math.floor(h / 2) != 0) {
    h = Math.floor(h / 2);
    for(i = h; i < len; i++) {
      temp = arr[i];
      for(j = i - h; j >= 0 && arr[j] > temp; j -= h) {
        arr[j + h] = arr[j];
      }
      arr[j + h] = temp;
    }
  }
}

const arr = [22,5,11,-1,0];
console.log(shellSort(arr));
