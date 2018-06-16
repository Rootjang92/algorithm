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

// 2. 핸드폰 번호 가리기.
// 핸드폰 요금 고지서 맨 뒷자리 4자리를 제외한 나머지를 *로 바꾸기.

function hiddenNumbers(str){
  var num = str.length - 4;
  var star = '';
  for(var i = 0; i < num; i++){
    star += '*';
  }
  return '*'.repeat(num) + str.substring(num);
}
console.log(hiddenNumbers('01051958667'));

// 3. 짝수와 홀수
// num은 1 이상의 정수이며, 음수는 없다. 짝수일 경우 even, 홀수일 경우 Odd를 반환.

function evenOrodd(num){
  if(num % 2 === 0){
    return 'even'
  }
  else{
    return 'Odd'
  }
}
console.log(evenOrodd(2));
console.log(evenOrodd(3));


// 4. 3번을 삼항연산자로 나타내어라

function evenOrodd(num){
  return (num % 2) ? 'even' : 'Odd';
}
console.log(evenOrodd(2));
console.log(evenOrodd(3));

// 5. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. 
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라. 
// 예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다.

function alphaString46(s){
  var result = '';
    if((s.length >= 4 || s.length <=6) && !isNaN(s)){
      result = true
    }
    else{
      result = false
    }
    return result
 }
 console.log(alphaString46('a234'))
