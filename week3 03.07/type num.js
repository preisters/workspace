//숫자형 진수 계산
/* 
let billion = 1e9;  // 10억, 1과 9개의 0

alert( 7.3e9 );  // 73억 (7,300,000,000)

alert(0xff); //16진수 255
alert(0xFF); //마찬가지로 255, 대소문자 가리지 않음
alert(0Xff); //그렇다면 x도 대소문자 안가리나? => 안가리네

let a = 0b11111111; // 255의 2진수
let b = 0o377; // 255의 8진수

alert( a === b ); // true, 숫자형은 진법이 달라도 같은 수라면 같다
 */


// num.toString(base) 메서드는 base 진법으로 num을 표현한 후 문자형으로 반환
/* 
let num = 255;

alert( num.toString(16) ); //ff
alert( num.toString(2) ); //11111111
alert( num.toString(24) ); //af
// tostring()은 36까지 가능, 숫자와 알파벳 전부 사용하면 36개이기때문?
alert( 12345678..toString(36) ); //7clzi 
//tostring 앞 .. 두개는 오타가 아니라 숫자를 대상으로 직접 호출할때는 점 두 개 .. 를 써야함
//1234.tostring()은 첫번째 점 이후로는 소수로 인식하여 에러가 발생할 수 있음.
//(1234).tostring()도 가능
 */


// 어림수 구하기 @@@@@@@@@@@@@@@@@
/*

Math.floor
소수점 첫째 자리에서 버림(!!내림!!). \\ 3.1은 3, -1.1은 -2가 됨.
Math.ceil
소수점 첫째 자리에서 올림. \\ 3.1은 4, -1.1은 -1이 됨.
Math.round
소수점 첫째 자리에서 반올림. \\ 3.1은 3, 3.6은 4 -1.1은 -1이 됨.
Math.trunc (!! Internet Explorer에서는 지원 X !!)
소수부를 무시(없앰). \\ 3.1은 3, -1.1은 -1이 됨.

*/

// 소수점 n번째 수를 기준으로 어림수 구하기 @@@@@@@@@@@@@@@@@@@@@@
/*

1. 곱하기, 나누기
let num = 1.23456;

alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

2. to Fixed(n) 사용
let num = 12.36;

alert( num.toFixed(1) ); // "12.4"
!! 주의 !! toFixed는 숫자형이 아닌 문자형을 반환한다. toFixed로 숫자형 출력하고 싶으면 앞에 +를 붙이거나 Number()를 호출하면 됨.

alert( num.toFixed(5) ); // "12.36000" 소수점 5번째 자리를 계산하기 위해 0이 추가됨.

*/


// 부정확한 계산 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
숫자형은 내부적으로 64비트 형식 IEEE-754로 표현. 52비트는 숫자 저장, 11비트는 소수점 위치, 1비트는 부호를 저장하는데 사용. 
그렇게 때문에 숫자가 너무 커져서 64비트의 공간을 초과하면 infinity로 처리됨
ex)
alert( 1e500 ); // Infinity

또한 정밀도 손실(loss of precision)이라는 것도 존재
ex)
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000...004
alert( 0.1.toFixed(20) ); // 0.1000...00555
해결방법은 toFixed(n)을 사용하여 어림수로 만들기
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30
숫자형이 필요하면 아래와 같이
alert( +sum.toFixed(2) ); // 0.3
*/


// isNaN과 isFinite
/* 
// isNaN은 인수를 숫자로 반환한다음에 NaN인지 테스트. 인수가 문자열인경우도 true
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); //true
// isNaN이 필요한 이유는 아래를 보면 알 수 있다.
alert( NaN === NaN ); // false

// isFinite(value)는 인수를 숫자로 변환한 후 숫자가 NaN/Infinity/-Infinity가 아닌 일반 숫자일 경우 true
alert( isFinite("15") ); //true
alert( isFinite("str") ); // false
alert( isFinite(Infinity) ); // false

// PS) Object.is는 ===보다 신뢰할만한 결과를 보여줌. 비교 결과가 정확해야 할 경우 쓰임
// ex)
alert( Object.is(NaN, NaN) ); // true
alert( Object.is(0, -0) ); //false
// Object.is(a, b)의 결과는 위 두 상황을 제외하고는 항상 a===b와 같다.
*/


// parseInt와 parseFloat
/*
+ 또는 Number()를 사용해서 숫자형으로 변환할 때 적용되는 규칙은 엄격해서 피연산자가 숫자가 아닐 경우 형 변환에 실패함
alert( +"100px" ); //NaN

alert( parseInt("100px") ); // 100
alert( parseFloat("12.5em") ); // 12.5

alert( parseInt('12.3') ); // 12, 정수만 반환
alert( parseFloat("12.3.4") ); // 12.3, 두 번째 점에서 숫자 읽기를 멈추고 반환.

alert( parseInt("a1234") ); // NaN, 앞자리 a가 숫자가 아니기 때문에

//PS) parseInt( str, radix )의 두번째 인수는 진수를 지정해주는데 사용.
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, 0x가 없어도 동작함
alert( parseInt('2n9c', 36) ); // 123456
*/


//기타 수학 함수들
/* 
//Math.random() 0과 1 사이의 난수를 반환(1은 제외).
alert( Math.random() ); // 실행할때마다 다른 값이 나옴
alert( Math.random() ); // 역시
alert( Math.random() ); // 마찬가지

//Math.max(a, b, c....) / Math.min(a, b, c....) 인수 중 최댓값/최솟값을 반환
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(3, 5, -10, 0, 1) ); // -10

//Math.pow(n, power) n을 power번 거듭제곱한 값을 반환
alert( Math.pow(2, 10) ); // 2의 10승 = 1024
 */