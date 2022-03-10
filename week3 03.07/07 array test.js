"use strict";

// 배열은 복사가 가능할까?
// 아래 코드를 실행하면 어떤 결과가 나올지 예측하라.
/* 
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert( fruits.length ); // 4. 배열은 복사해도 참조한 주소가 복사되기 때문에 fruits===shoppingCart가 된다. 따라서 shoppingCart에 배열을 추가해도 fruits 배열에도 추가된다.
 */


// 배열과 관련된 연산
/* 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
"Rock-n-Roll"을 배열 끝에 추가합니다.
배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
배열의 첫 번째 요소를 꺼내서 출력합니다.
"Rap"과 "Reggae"를 배열의 앞에 추가합니다. */
/* 
let styles = ["Jazz", "Blues"];
alert( styles );
styles.push("Rock-n-Roll");
alert( styles );
styles[Math.floor( (styles.length -1) / 2)] = "Classics"
alert( styles );
alert( styles.shift() );
styles.unshift("Rap","Reggae");
alert( styles );
 */


// 배열 컨텍스트에서 함수 호출하기
// 아래 코드를 실행하여 나온 결과를 예측하라.
/* 
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){ ... } . 배열에는 함수를 추가할 수 있다. 함수가 들어있는 배열을 얼럿창에 호출하는 함수가 들어있기 때문에 해당 함수가 동작한다.
 */


// 입력한 숫자의 합 구하기
// 아래 조건을 만족하는 함수 sumInput()을 작성해라.
/* prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
배열 요소의 합을 계산하고 리턴합니다.
주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다. */
/* 
function sumInput() {
  let nums = [];

  while (true) {
    let value = prompt( "숫자 입력해라.", 0 );

    if (value === "" || value === null || !isFinite(value)) break;

    nums.push(+value);
  } 

  let sum = 0;

  for (let num of nums) {
    sum = sum + num;
  }
  alert(`입력한 수 : ${nums}`)
  alert(sum);

}

sumInput();
 */


// 최대합 부분 배열
/* 
function getMaxSubSum(arr) {
  let MaxSum = 0;
  let sum = 0;

  for (let num of arr) {
    sum += num;
    MaxSum = Math.max(MaxSum, sum);
    if (sum < 0) sum = 0;
  }

    return MaxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) == 5 );
alert( getMaxSubSum([2, -1, 2, 3, -9]) == 6 );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) == 11 );
alert( getMaxSubSum([-2, -1, 1, 2]) == 3 );
alert( getMaxSubSum([100, -9, 2, -3, 5]) == 100 );
alert( getMaxSubSum([1, 2, 3]) == 6 );
 */