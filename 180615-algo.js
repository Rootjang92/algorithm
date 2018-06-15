// 1.1 1~10,000의 숫자 중 8이 등장하는 횟수 구하기
// 단,8이라는 숫자를 모두 카운팅해야 한다. 

function getCount8(){
  var all = '';
  var count = 0;
  for(i = 1; i < 10001; i++){
    all += i;
  }
  for(j = 1; j < all.length; j++){
    if(all[j] === '8') count++;
  }
  return count;
}
console.log(getCount8());