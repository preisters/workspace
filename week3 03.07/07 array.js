"use strict";

// 배열
// .length를 사용하면 char의 길이 뿐만아니라 배열에 담긴 요소가 몇 개인지 알 수 있다. 
// !!빈 요소("")도 셈을 하니 주의
/* 
let fruits = ["사과", "오렌지"];

fruits[5] = "배";

alert( fruits ); // 사과,오렌지,,,,배

alert( fruits.length ); // 6

// 배열의 요소에는 자료형의 제약이 없다. 
let arr = [ '사과', { name: '이보라' }, true, function() { alert('안녕하세요.'); } ];

alert( arr[1].name ); // 이보라

arr[3](); // 안녕하세요.
 */


// 큐와 스택
// 큐는 선입선출 스택은 후입선출
// 때문에 큐는 상대적으로 느리고 스택은 상대적으로 빠르다. 큐는 요소 추가,제거 뿐만아니라 다른 요소들까지 이동해야하기 떄문
// pop은 스택 추출, push는 스택 추가
/* 
let fruits = ["사과", "오렌지", "배"];
alert( fruits.pop() ); // 배, 배열에서 마지막 요소를 제거하고 얼럿창에 표기
alert( fruits ); // 사과, 오렌지
fruits.push("배");
alert( fruits ); // 사과, 오렌지, 배

// shift는 큐 추출, unshift는 큐 추가
alert( fruits.shift() ); // 사과, 배열에서 첫 요소를 제거하고 얼럿창에 표기
alert( fruits ); // 오렌지, 배
fruits.unshift("사과");
alert( fruits ); // 사과, 오렌지, 배

//push와 unshift는 여러 요소를 한번에 더해줄 수 있음

fruits.push("딸기", "포도");
fruits.unshift("자몽", "석류");
alert( fruits ); // 자몽, 석류, 사과, 오렌지, 배, 딸기, 포도
 */


// 배열의 반복문
// for문 사용
/* 
let arr = ["사과", "오렌지", "배"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

// for .. of 문 사용

let fruits = ["사과", "오렌지", "자두"];

for (let fruit of fruits) {
  alert( fruit );
}

// 물론 for .. in 문도 사용 가능

for (let key in arr) {
  alert( arr[key] ); 
}
 */


// length 프로퍼티로는 배열을 줄일 수 있다. 하지만 다시 늘려도 기존 요소가 되돌아오지 않는다.
// 이를 사용하여 배열을 비울 수 있다.
/* 
let numbers = [1, 2, 3, 4, 5, 6];
numbers.length = 3;
alert( numbers ); // 1,2,3

numbers.length = 6;
alert( numbers );

numbers.length = 0; // 배열 비우기
alert( numbers ); // "". 배열을 비웠기 때문에 아무 요소도 존재하지 않는다.
 */


// new Array(숫자형 인수)를 사용해도 배열을 만들 수 있다.
// 숫자형 인수를 넣으면 배열의 길이가 인수로 정해지지만 요소가 없는 배열이 만들어진다.
/* 
let arr = new Array(2); 
alert( arr[0] ); // undefined. 빈 배열이 만들어진다.
alert( arr.length ); // 2. 길이는 인수에 따라 정해진다
alert( arr ); // , . 아무것도 존재하지 않지만 길이가 2인 배열
 */


// 다차원 배열
// 배열의 요소에는 배열이 들어갈 수 있다. 행렬을 저장할 때 씀
/* 
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix ); // 1,2,3,4,5,6,7,8,9 . 일반 배열처럼 출력된다.
alert( matrix[1][1] ); // 5, 2번째 줄 2번째 요소
 */


// toString
// 배열에는 toString 매서드가 구현되어 있어 이를 호출하면 요소를 쉼표로 구문한 문자열이 반환된다.
/* 
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( arr === "1,2,3" ); // false
alert( arr === "1","2","3" ); //false
alert( String(arr) === "1,2,3") //true
 */
// 배열에서는 Symbol.toPrimitive나 valueOf 매서드가 없어서 숫자형 셈을 해줘도 문자열로의 형 변환이 이루어진다. []는 빈 문자열 [1]는 1, [1,2]는 문자열 "1,2"로 변환
/* 
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"
 */
