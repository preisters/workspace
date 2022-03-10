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