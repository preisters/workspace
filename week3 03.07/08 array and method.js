// 요소 추가, 제거 메서드
// push, pop, shift, unshift 외에도 배열의 요소를 추가하거나 제거하는 메소드들

// splice
// 배열에서 특정 위치의 요소를 지울 때 쓸 수 있다.
// delete는 요소를 지우지만 빈 값으로 대체하기 때문에 키값은 그대로 남아있는 모습을 볼 수 있다.
/* ex)
let arr = ["I", "go", "home"];

delete arr[1]; // "go" 삭제

alert( arr[1] ); // undefined

alert( arr ); //I,,home
alert( arr.length ); // 3
 */

// 그렇기 때문에 원하는 동작( 요소를 지우고 뒤에 존재하는 요소들을 앞으로 땡겨오기 )을 하려면 splice를 써야한다.
// 문법은 arr.splice(index[, deleteCount, elem1, ..., elemN])으로 조작할 첫번째 요소를 가리키는 index, 제거하고자 하는 요소의 갯수인 deleteCount, 배열에 추가할 요소를 나타낸 elem들이 있다.
// 먼저 단순 삭제에 대한 예시이다
/* 
let arr = ["I", "study", "JaveScript"];

arr.splice(1, 1); // arr[1]부터 요소 1개를 제거

alert( arr ); // I,JavaScript
 */

// 다음은 요소 3개를 지우고, 그 자리에 다른 요소 두 개로 교체하는 예시이다.
/* 
let arr = ["I", "study", "JavaScript", "right", "now"];

arr.splice(0, 3, "Let's", "dance");

alert( arr ); // Let's,dance,right,now
 */

// splice는 삭제된 요소로 구성된 배열을 반환한다.
/* 
let arr = ["I", "study", "JavaScript", "right", "now"];

let remove = arr.splice(0, 2);

alert( remove ); // I,study
 */

// 물론 splice로 요소를 제거하지 않고 추가만 할 수도 있다.
/* 
let arr = ["I", "study", "JavaScript"];

arr.splice(2, 0, "complex", "language"); // 인덱스 2부터 0개의 요소를 삭제하고 com.., lan..을 추가

alert( arr ); // I,study,complex,language,JavaScript
 */

// 또한 다른 배열 관련 메서드처럼 음수값도 사용 가능. 음수를 사용하면 뒤에서부터 센다는 뜻
/* 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(-5, 4, 10, 11); // 뒤에서부터 5번째(5) 부터 4개 요소를 삭제하고 10, 11을 추가

alert( arr ); // 1,2,3,4,10,11,9
 */


// slice는 기존의 배열을 조작하지 않고 새로운 배열을 만들고자 할때 쓴다. arr.slice([start], [end]) : start 인덱스부터 end 인덱스까지(end 인덱스는 제외) 요소를 복사한다.
// 마찬가지로 start와 end 역시 음수 가능. 음수일 경우 배열 끝에서부터 순서
/* 
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s 인덱스가 1인 요소부터 3인 요소까지(끝나는 요소는 포함하지 않음)

alert( arr.slice(-2) ); // s,t 인덱스가 -2인 요소부터 끝까지
 */


// concat은 기존 배열을 사용해 새로운 배열을 만들거나 기존 배열에 요소를 추가하고자 할 때 사용.
// 문법은 arr.concat(arg1, arg2 ...)이며 인수의 제한은 없다. arg에 단순한 값일 경우 요소 하나로 복사되며 arg가 배열일 경우 배열의 모든 요소가 복사된다.
/* 
let arr = [1, 2];

alert( arr.concat([3, 4]) ); // 1,2,3,4

alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
 */

// concat 메서드는 객체가 인자로 넘어오더라도 객체는 분해되지 않고 통으로 복사하여 더해짐
/* 
let arr = [1, 2];

let arrayLike = {
0: "something",
length: 1
};

alert (arr.concat(arrayLike) ); // 1,2,[object Object]
 */

// 이걸 원하는 대로 작동시키려면 객체에 특수한 프로퍼티 Symbol.isConcatSpreadable 값이 true로 존재하면 된다.
/* 
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something.else
 */


// forEach로 반복작업 하기
// arr.forEach(function(item, index, array) { 요소에 할 작업 }); 으로 사용한다
 /* 
let arr = ["Bilbo", "Gandalf", "Nazgul"]

arr.forEach(alert); // 얼럿창에 Bilbo, Gandalf, Nazgul을 요소 하나씩 출력

// 아래는 인덱스 정보까지 더해서 출력해주는 코드
// ps) 인수로 넘겨준 함수의 반환값은 무시됨

arr.forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
 */


// 배열 탐색하기
// 문자열과 마찬가지로 indexOf, lastIndexOf, includes 가 있다.
// arr.indexOf(item, from)는 인덱스 from부터 시작해 item(요소)를 찾아서 해당 요소를 발견하면 요소의 인덱스를 반환하고, 발견하지 못했으면 -1을 반환함
// arr.lastIndexOf(item, from)는 위와 동일하지만 끝에서부터 검색
// arr.includes(item, from)는 인덱스 from부터 시작해 item을 검색하지만 요소를 발견했을때 반환값은 true다.
// 이 세가지 메소드는 요소를 찾을때 === 으로 찾기 때문에 0과 false는 같다고 보지 않는다.
/* 
let arr = [1, 0, false, 0];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.lastIndexOf(0) ); // 3
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true

// !!--------------includes만 유일하게 NaN을 제대로 처리하기 때문에 단순히 요소가 배열에 존재하는지 여부만 확인한다면 includes를 사용하는게 좋다--------------!!

const array = [NaN];
alert( array.indexOf(NaN) ); // -1. NaN === NaN으로 동작하기 때문에 없다고 판단. NaN은 그 어느것과도 같지 않다고 판단
alert( array.includes(NaN) ); // true. 때문에 includes를 사용해야만 NaN 구별가능.
 */


// find와 findIndex
// 객체로 이루어진 배열에서 특정 조건에 부합하는 객체를 찾을 때 사용한다.
// 문법은 arr.find(function(item, index, array) { true가 반환되면 반복을 멈추고 해당 요소 반환. 조건에 해당하는 요소가 없으면 undefind를 반환 }); 
// item - 함수를 호출할 요소, index - 요소의 인덱스, array - 배열 자기 자신.
/* 
let users = [
  {id: 1, name: "John"},
  {id: 4, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
// !!-------------- 실무에서 객체로 구성된 배열을 자주 다루기에 find는 알아둬야함. 위처럼 인자 하나만 가지는 경우가 많고 다른 인자들(index, array)는 잘 사용하지 않음.--------------!!

// arr.findIndex는 find와 동일한 일을 하지만 조건에 맞는 요소 대신 해당 요소 인덱스를 반환함. 조건에 해당하는 요소가 없으면 -1을 반환.

let index = users.findIndex(item => item.name == "Pete");

alert(index); // 1. users의 요소 중 객체의 name요소가 Pete인 요소의 인덱스값
 */


// filter
// find는 단 하나의 요소만 찾기 때문에 조건에 충족하는 여러 요소를 찾으려면 arr.filter(fn)를 사용해야 한다. 사용법은 동일
/* 
let users = [
  {id: 1, name: "John"},
  {id: 4, name: "Pete"},
  {id: 3, name: "Mary"}
];

let someUsers = users.filter(item => item.id <4);

alert(someUsers.length); //2
 */


// 배열을 변형시키는 메서드
// !!--------------arr.map은 유용성과 사용 빈도가 아주 높은 메서드 중 하나. 배열 요소 전체를 대상으로 함수를 호출하고, 호출 결과를 배열로 반환--------------!!
/* 
let arr = ["Bilbo", "Gandalf", "Nazgul"]

let lengths = arr.map(item => item.length);

alert(lengths); // 5,7,6
 */

// arr.sort(fn)는 배열의 요소를 정렬. 정렬된 값이 출력되는 것뿐만아니라, arr 자체도 정렬되어 수정되기 때문에 반환값은 잘 사용되지 않는다. 
/* 
let arr = [ 1, 2, 15 ];

arr.sort();

alert( arr ); // 1, 15, 2
// 요소는 문자열로 취급. 그렇기 때문에 숫자형 순으로 정렬하려면 sort에 새로운 함수를 넘겨줘야함.

function compare(a, b) {
  if (a > b) return 1; // 정렬 함수의 리턴값은 어떤 숫자던 상관 없음. 양수이면 첫번째 인수가 두번째 인수보다 '크다'를 나타내고 음수이면 첫번째 인수가 두번째 인수보다 '작다'를 나타냄
  if (a == b) return 0;
  if (a < b) return -1;
}

arr.sort(compare);

alert( arr );
 */
// arr.reverse는 sort와 반대로 요소를 역순으로 정렬시키는 메서드.


// split과 join
// split(delim)은 파이썬과 동일하게 문자열을 delim을 기준으로 쪼개서 배열로 넣어주는 메서드
/* 
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `${name}에게 보내는 메시지` ); 
}
// split(s)의 s를 빈 문자열로 할 경우 문자열을 글자 단위로 분리할 수 있음.

let str = "test";

let splNames = names.split('');

alert( str.split('') ); // t,e,s,t
alert( splNames ); // B,i,l,b,o,,, ,G,a,.....,g,u,l

// arr.join(glue)는 split과 반대 역할. 인수 glue를 접착제처럼 사용해 배열 요소를 모두 합친 후 하나의 문자열을 만들어줌.

let namesGlue = arr.join(', ');
let splGlue = splNames.join('');
alert( namesGlue );
alert( splGlue );
 */


// reduce와 reduceRight
// 배열을 기반으로 값 하나를 도출할 때 사용. forEach, for, for..of나 map와 용도가 비슷함.
// 문법은 arr.reduce(function(accumulator, item, index, array) { ... }, [initial]);
// accumulator - 이전 함수 호출의 결과. initial은 함수 최초 호출 시 사용되는 초깃값을 나타냄(옵션)
// item - 현재 배열 요소 index - 요소의 위치 array - 배열
/* 
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

// 초깃값이 생략되어도 됨.
let result2 = arr.reduce((sum, current) => sum + current);

alert( result );
 */
//!!-------------- 하지만 이렇게 쓰는 건 지양되어야 함. 배열이 비어있으면 reduce 호출 시 에러가 발생하기 때문에 초깃값을 넣어주는 것이 좋음.--------------!!

// arr.reduceRight는 reduce와 동일한 기능을 하지만 배열의 오른쪽(끝?)부터 연산을 수행한다는 점이 다름
/* 
let arr = [1, 2, 3, 4, '오', 6, 7, 8, 9]
let result = arr.reduce((sum, current) => sum + current, 0);
alert( result ); // 10오6789
let result2 = arr.reduceRight((sum, current) => sum + current, 0);
alert( result2 ); // 30오4321
 */


// Array.isArray로 배열 여부 알아내기
// 배열은 독립된 자료형으로 취급되지 않고 객체형으로 취급. 따라서 typeof로는 일반 객체와 배열을 구분할 수 없음.
// Array.isArray(arr)를 사용하면 arr이 배열일 경우 true, 배열이 아닐경우 false를 반환
/* 
alert(Array.isArray( {} )); // false
alert(Array.isArray( [] )); // true
 */


// 배열 메서드와 'thisArg'
// 함수를 호출하는 대부분의 배열 메서드(sort 제외)는 thisArg라는 매개변수를 옵션으로 받을 수 있다.
// !!--------------자주 사용하진 않으니까 알고만 넘어가면 될듯--------------!!
// arr.find(func, thisArg);
// arr.filter(func, thisArg); 등으로 선택적으로 사용할 수 있는 마지막 인수. thisArg는 func의 this가 됨.

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); //2
alert(soldiers[0].age); //20
alert(soldiers[1].age); //23
// 단순히 users.filter(army.canJoin);으로 사용했다면 army.canJoin이 단독함수로 취급되어 함수 본문 내 this는 undefined가 되어 에러가 표출.
// userts.filter( user => army.canJoin(user))를 사용해도 가능하나 thisArg를 사용하는 방식이 간편하고 알기 쉬워 더 자주 사용.