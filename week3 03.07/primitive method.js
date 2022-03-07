// 원시값의 메서드
// 원시값은 객체가 아니다.
// 아래는 원시값의 프로퍼티(toUpperCase)에 접근하는 순간 특별한 개체를 만들어서 원시값 str의 메서드를 실행시키고 새로운 문자열을 반환한다. 이후 특별한 개체는 파괴되고 원시값 str만 남게 된다 

/* 
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
 */

// 숫자형 역시 마찬가지
// 아래는 원시값 n을 메서드 toFixed(value)가 받아 소수점 아래 value자리의 숫자를 반올림시킨 값을 반환한다.  
/* 
let n = 1.23456;

alert( n.toFixed(2) ); // 1.23
 */