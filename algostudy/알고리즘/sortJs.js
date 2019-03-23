// 정렬 알고리즘 모음.

var AA = [234,41,34,4,3,6,55,23,456,45,1,856,9,67,56,7];


// 배열 위치를 바꾸는 함수.

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};


// 퀵 정렬

var partition = function(array, left, right, pivotIndex) { // 정렬하는 부분
  var temp;
  var pivot = array[pivotIndex];
  while (left <= right) { // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
    while (array[left] < pivot)
      left++;
    while (array[right] > pivot)
      right--;
    if (left <= right) { // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
      temp = array[left];
      array[left] = array[right];
      array[right] = temp; // 서로 바꿔줍니다.
      left++;
      right--;
    }
  }
  temp = array[left];
  array[left] = array[pivotIndex];
  array[pivotIndex] = temp; // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
  return left;
};

var quickSort = function(array, left, right) { // 재귀하는 부분
  if (!left) left = 0;
  if (!right) right = array.length - 1;
  var pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.
  pivotIndex = partition(array, left, right - 1, pivotIndex); // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.
  if (left < pivotIndex - 1)
    quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
  if (pivotIndex + 1 < right)
    quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
  return array;
};

console.log(quickSort(AA.slice()));

// 2. 버블정렬

function BubbleSort(arr) {
  var len = arr.length;

  for(var outer = len; outer > 1; --outer) {
    for(var inner = 0; inner < outer; ++inner) {
      if (arr[inner] > arr[inner + 1]) {
        swap(arr,inner,inner+1);
      }
    }
  }

  return arr;
}


console.log(BubbleSort(AA.slice())); // [ 1, 3, 4, 6, 7, 9, 23, 23, 23, 34, 41, 45, 55, 56, 67, 234, 456, 856 ]



// 3. 선택정렬
// 가장 작은 데이터를 찾아 앞에 것과 교환하는 방식.

function SelectionSort(arr) {
  var len = arr.length;
  var min;

  for(var outer = 0; outer < len - 1; ++outer) {
    min = outer;
    for (var inner = outer + 1; inner < len; ++inner) {
      if (arr[inner] < arr[min]) {
        min = inner;
      }
    }
    swap(arr,outer,min);
  }
  return arr;
}

console.log(SelectionSort(AA.slice()));



// 4. 합병정렬 분할 정복 알고리즘

function MergeSort(arr) {
  var len = arr.length;
  if (len == 1) {
    return arr;
  }

  var middle = Math.floor(len / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, len);

  function merge(left, right) {
    var res = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        res.push(left.shift());
      } else {
        res.push(right.shift());
      }
    }

    while(left.length) {
      res.push(left.shift());
    }

    while(right.length) {
      res.push(right.shift());
    }

    return res;
  }

  return merge(MergeSort(left), MergeSort(right));
}

console.log(MergeSort(AA.slice()));



// 5. 삽입정렬
// 아직 정렬되지 않은 임의의 데이터를 이미 정렬된 부분의 적절한 위치에 삽입해 가며 정렬하는 방식

function InsertionSort(arr) {
  var len = arr.length;
  var temp, inner;

  for (var outer = 1; outer < len; ++outer) {
    temp = arr[outer];
    inner = outer;

    while (inner > 0 && arr[inner - 1] >= temp) {
      arr[inner] = arr[inner - 1];
      --inner;
    }
    arr[inner] = temp;
  }
  return arr;
}

console.log(InsertionSort(AA.slice()));


