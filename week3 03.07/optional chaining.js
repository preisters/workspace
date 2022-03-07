//옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.
/* 
// 옵셔널 체이닝이 필요한 이유
let user = {}; // 주소 정보가 없는 사용자

alert(user.address.street); // TypeError: Cannot read property 'street' of undefined 
*/


// ?.이 생기기 전에는 에러처리를 &&를 사용해서 함
/*  //이렇게 하면 코드가 너무 길어짐
let user = {}; // 주소 정보가 없는 사용자

alert( user && user.address && user.address.street ); // undefined, 에러가 발생하지 않습니다.
 */


//옵셔널 체이닝 사용
/* 
let user = {}; // 주소 정보가 없는 사용자

alert( user?.address?.street ); // undefined, 에러가 발생하지 않습니다.
 *//* 
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
 */

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
옵셔널 체이닝 남용 금지
?.은 존재하지 않아도 괜찮은 대상에만 사용해야함
이유는 꼭 있어야 하는 값이 없게 되는 에러사항을 조치하지 않고 넘어가게되면
디버깅하는데 어려움이 생김

?. 앞의 변수는 꼭 선언되어 있어야 함.
그렇지 않을 경우 코드 평가시에 앞의 변수가 정의되지 않았다는 에러가 발생함
ex)
// ReferenceError: user is not defined
user?.address;

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


// ?.은 왼쪽 평가대상에 값이 존재하지 않으면 즉시 평가를 멈추는 단락평가를 실행함
/* 
ex)
let user = null;
let x = 0;

user?.sayHi(x++); // 아무 일도 일어나지 않습니다.

alert(x); // 0, x는 증가하지 않습니다.
 */


// ?.은 연산자가 아닌 syntax construct이기 때문에 ?.()로 쓸 수도 있음
/* 
let user1 = {
  admin() {
    alert("관리자 계정입니다.");
  }
}

let user2 = {};

user1.admin?.(); // 관리자 계정입니다.
user2.admin?.();

// 마찬가지로 ?.[]도 사용가능
let user1 = {
  firstName: "Violet"
};

let user2 = null;

let key = "firstName";

alert( user1?.[key] ); // Violet
alert( user2?.[key] ); // undefined

alert( user1?.[key]?.something?.not?.existing); // undefined

// 추가로 delete와도 조합이 가능함
delete user?.name; // user가 존재하면 user.name을 삭제합니다.

/****************  주의 **************************
?.는 읽기와 삭제는 가능하지만 쓰기에는 사용 불가

user?.name = "Violet"; // SyntaxError: Invalid left-hand side in assignment
// 에러가 발생하는 이유는 undefined = "Violet"이 되기 때문

*/

