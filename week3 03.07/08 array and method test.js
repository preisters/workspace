"use strict";

//border-left-width를 borderLeftWidth로 변경하기
//"my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해라. 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 표기
/* 
function camelize(text) {
  return text
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

alert(camelize("background-color") == 'backgroundColor');
alert(camelize("list-style-image") == 'listStyleImage');
alert(camelize("-webkit-transition") == 'WebkitTransition');
 */


// 특정 범위에 속하는 요소 찾기
// 배열 arr의 요소 중 a 이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해라
// 새로 작성하는 함수는 기존 배열 arr를 변경하면 안 되고, 변환되는 함수는 새로운 배열이어야 한다.
/* 
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
 */


// 특정 범위에 속하는 요소 찾기(배열 변경하기)
// 위와 동일하나 조건에 맞지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성하라.
// 작성된 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 한다.
/* 
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert( arr ); // [3, 1]
 */


// 내림차순으로 정렬하기
/* 
let arr = [5, 2, 1, -10, 8];

function reverseSort(a, b) {
  if ( a > b ) return -1;
  if ( a == b ) return 0;
  if ( a < b ) return 1;
}

arr.sort(reverseSort);

alert( arr ); // 8, 5, 2, 1, -10
 */


// 배열 복사본을 정렬하기
// 문자열이 담긴 배열 arr를 복사한 다음 해당 배열을 정렬하는 copySorted(arr)을 작성하라. 단 이때 arr는 변경되면 안 된다.
/* 
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
  let newarr = arr.slice();
  return newarr.sort();
}
// 모범답안
//function copySorted(arr) {
//  return newarr.slice().sort();
//}

*/


// 확장 가능한 계산기
// 기능을 "확장"할 수 있는 계산기 객체를 만들어주는 생성자 함수 Calculator를 작성하라
/* Calculator는 두 단계를 거쳐 만들 수 있습니다.

첫 번째 단계는 "1 + 2"와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 바꿔주는 메서드 calculate(str)를
구현하는 것입니다. 이 함수는 +와 -를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.

예시:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 addMethod(name, func)를 추가해 주는 것입니다.
연산자 이름을 나타내는 name과 인수가 두개인 익명 함수 func(a,b)를 받는 새 메서드를 구현해야 하죠.

구현된 메서드를 이용해 곱셈 *과 나눗셈 /, 거듭제곱 **연산자를 추가해주는 예시는 아래와 같습니다.

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
참고사항:
괄호나 복잡한 표현식 없이도 본 과제를 풀 수 있습니다.
숫자와 연산자는 공백 하나로 구분합니다.
에러 핸들링을 위한 코드를 추가해도 좋습니다(선택 사항).
 */
/* 
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    };

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
 */


// 이름 매핑하기
// name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성하라.
/* 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary
 */


// 객체 매핑하기
// 세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있다.
// name과 surname을 조합해 fullname을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을
// 반환해주는 코드를 작성하라.
/* 
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(item => ({ fullName: item.name + " " + item.surname, id: item.id}));
// 모범답안 = users.map(user => ({ fullName: `${user.name} ${user.surname}`, id: user.id}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
 */


// 나이를 기준으로 객체 정렬하기
// 프로퍼티 age가 있는 객체가 담긴 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어라.
/* 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age)
}
 */


// 배열 요소 무작위로 섞기
// 배열의 요소를 무작위로 섞어주는 함수 shuffle(array)를 작성해라.
// shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 한다.
/* 봐도 뭔소린지 모르겠다. 서렌
let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]

function shuffle(arr) {
  length = arr.length;

}
 */ 

// 평균 나이 구하기
// age를 나타내는 프로퍼티를 가진 객체가 여러개 담긴 배열을 사용하여 평균 나이를 반환해주는 함수 getAverageAge(users)를 작성하라.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
  let length = arr.length;
  let sum = 0
  for (let num of arr) { sum += num.age }
  return sum/length
}