"use strict";

// 문자열
// 자바스크립트에는 글자 하나만 저장할 수 있는 별도의 자료형이 없다. 텍스트 형식의 데이터는 길이 상관없이 문자열로 저장됨.
// 문자열은 인코딩 형식과 무관하게 항상 UTF-16을 따름


// 따옴표
// 문자열은 아래 3가지 방법으로 표현가능
/* 
let single = '작은따옴표';
let double = "큰따옴표";
let backticks = `백틱`;
 */

// 작은따옴표랑 큰 따옴표는 기능상 차이가 없다. 하지만 백틱은 특별한 기능이 있음. 파이썬의 f''처럼 `${}`를 사용하면 문자열 중간에 표현식 사용 가능. 템플릿 리터널이라고 부름.
/* 
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
 */


// 또한 백틱을 사용하면 문자열을 여러 줄에 걸쳐 작성 가능
/* 
let guestList = `손님 :
* John
* Pete
* Mary
`;

alert(guestList); // 쓴 그대로 출력됨. 
 */


// 특수기호
// \n은 여타 다른 언어처럼 사용. 백틱이 아닌 작은따옴표나 큰따옴표를 꼭 쓰고싶을때 여러줄 표현. 대부분의 특수기호 표기법이 파이썬과 동일

// \' , \"    따옴표
// \\         역슬래시
// \t         탭
// \xXX       16진수 유니코드 XX로 표현한 유니코드 글자 ex) 알파벳 'z'는 '\x7A'와 동일
// \uXXXX     UTF-16 인코딩 규칙을 사용하는 16진수 코드 XXXX로 표현한 유니코드 기호.
//            XXXX는 반드시 네 개의 16진수로 구성. ex) '\u00A9'는 저작권 기호 ©의 유니코드.
// \u{X....XXXXXX}                    UTF-32로 표현한 유니코드 기호. 몇몇 특수한 글자는 두 개의 유니코드 기호를 사용하여 인코등되므로 4바이트를 차지.
// 한 개에서 6개 사이의 16진수 글자 X   이 방법을 사용하면 긴 코드 삽입 가능
// ex)
/* 
alert( "\u00A9" ); // 0
alert( "\u{20331}" ); // 𠌱, 중국어(긴 유니코드)
alert( "\u{1F60D}" ); // 😍, 웃는 얼굴 기호(긴 유니코드)

// length 프로퍼티는 문자열의 길이가 저장됨. 역슬래시를 사용해서 표현한 특수기호는 문자 하나로 취급됨.
alert( `My\n`.length ); // 3. !!length는 함수가 아니라 프로퍼티. length()로 쓰는 실수를 하지 말자!!
*/

// 특정 글자에 접근하기
// 문자열 내 pos 번째 글자에 접근하려면 [pos] 혹은 str.charAt(pos) 사용. charAt은 하위호환성을 위해 남아있는 메서드
/* 
let str = `Hello`;

alert( str[0] ); // H
alert( str.charAt(0) ); // H
alert( str[-1]); // o

// [pos]와 charAt(pos)의 차이점. 해당 위치에 글자가 없으면 []는 undefined, charAt()는 빈 문자열
// ex)
let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // ''

// for .. of를 사용하면 문자열을 구성하는 글자를 대상으로 반복 작업을 할 수 있다.

for (let char of "Hello") {
  alert(char); // H,e,l,l,o
}
*/


// 문자열의 불변성
// 문자열은 수정 불가, 문자열 중간 글자 하나를 바꾸려면 에러가 발생. 파이썬이랑 헷갈리지 말자
/* 
let str = 'Hi';
str[0] = 'h'; // TypeError: Cannot assign to read only property '0' of string 'Hi'
alert( str[0] );
 */
// 이 문제를 피하려면 완전 새로운 문자열을 만들어서 재할당 시키면 됨.
/* 
let str = 'Hi';

str = 'h' + str[1];

alert( str ); // hi
 */


// 대,소문자 변경하기
// toLowerCase(), toUpperCase() 사용법은 뻔하지 뭐.
/* 
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
// 마찬가지로 글자 하나만 추출해서 변경도 가능

alert( 'Interface'[0].toLowerCase() ); // 'i'
 */


// 부분 문자열 찾기
// str.indexOf(substr, pos)
// str의 pos부터 시작해서 substr이 어디에 있는지 찾아주는 함수. 찾을 수 없다면 -1을 반환.
/* 
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0
alert( str.indexOf('widget') ); // -1, indexOf는 대소문자도 구분하므로 찾을 수 없다.
alert( str.indexOf("id") ); // 1, Widget에 id 가 존재하여서 1
alert( str.indexOf('id', 2) ); // 12, 찾는 위치가 2(d)부터이기에 첫 id를 넘기고 다음으로 나오는 id를 찾는다.
 */

// 문자열 내 부분 문자열 전체를 찾고자 하면 반복문을 활용하면 됨.
/* 
let str = 'As sly as a fox, as strong as an ox';

let target = 'as';

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `위치: ${foundPos}` );
  pos = foundPos + 1;
}
 */
// !!str.lastIndexOf(substr, position)는 문자열 끝에서부터 찾는다는 점만 다름. 반환값 역시 문자열 끝이 기준

/* 
// includes는 위치 필요 없이 포함 여부만 알고 싶을때 사용.
alert( "Widget with id".includes("Widget") ); //true
// str.indexOf처럼 두 번재 인수를 사용하면 해당 위치부터 검색
alert( "Widget".includes("id", 3) ); // false, 세번째 이후로는 "id"가 없음

//startsWith, endsWith는 시작글자, 끝글자를 조회.
alert( "Widget".startsWith("Wid") ); // ture
alert( "Widget".endsWith("get") ); // ture
 */


// 부분 문자열 추출하기
// substring, substr, slice 세개의 메서드가 있음.

// str.slice(start [, end]) str의 start부터 end까지(end는 미포함) 반환. 글자가 없을경우 '' 반환
//ex)
/*
let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', 0번째 글자부터 5번째 위치까지(끝나는 위치는 포함하지 않음)
alert( str.slice(0, 1) ); // 's', 마찬가지로 끝나는 글자는 포함하지 않음
alert( str.slice(14, 18) ); // '', 시작하는 위치에 글자가 없음
alert( str.slice(18, 14) ); // '', 끝나는 위치가 시작하는 위치보다 앞일 경우에 '' 리턴
alert( str.slice(1, 1) ); // '', 끝 글자는 포함하지 않기 때문에
// 두 번째 인수가 생략된 경우에는 시작 위치부터 문자열 끝까지 반환
alert( str.slice(2) ); // ringify, 2번째부터 문자열 끝까지.
// start와 end는 음수 가능. 늘 그렇듯 뒤에서부터 카운트한다는 뜻.
alert( str.slice(-4, -1) ); // gif 
*/

// str.substring(start [, end]) start와 end 사이에 있는 문자열을 반환. start와 end가 서로 뒤바뀌어도 낮은 수가 시작점, 높은 수가 끝나는 점. 음수는 0으로 판정
/* 
let str = "stringify";
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring", 동일함
alert( str.substring(6, -5)); // "string" 음수값은 0으로 생각, 낮은 수가 시작점.
 */

// str.substr(start [, length]) start부터 시작해서 length 개의 글자를 반환. start만 음수 가능. length가 음수면 "" 리턴
/* 
let str = "stringify";
alert( str.substr(2, 4) ); //ring, 2번 글자부터 4글자
alert( str.substr(-4, 2) ); // gi, 끝에서 4번째 글자부터 2개
alert( str.substr(4, -2) ); // "", 두 번째 인자가 음수기 때문
 */


// 문자열 비교하기
