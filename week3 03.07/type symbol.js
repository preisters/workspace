// 심볼은 유일한 식별자를 만드는데 사용. Symbol()로 만들 수 있음
// 이름(설명)이 같은 심볼이 같은 개체를 가리키게 하고싶다면 Symbol.for()를 사용해서 전역심볼을 선언해주면 됨

/* 
let id1 = Symbol("id");
let id2 = Symbol("id");
let id3 = Symbol.for("id");
let id4 = Symbol.for("id");

alert(id1 == id2); // false. "id"는 심볼 설명일 뿐 심볼 하나하나가 고유한 값을 가짐
alert(id3 === id4); // true. Symbol.for()를 사용하면 심볼이 같은 개체를 가리키게 가능

// 심볼은 형변환 불가, 얼럿으로 출력하려해도 타입에러 발생
alert(id1); // TypeError: Cannot convert a Symbol value to a string
 

//굳이 출력하려면 아래 방법으로 가능은 함
alert(id1.toString());

//설명 출력하려면 아래 방법으로 가능
alert(id2.description);
 */


// 심볼을 이용하여 외부 코드에서 접근이 불가능하고 값을 덮어쓸 수 없는 숨김 프로퍼티를 만들 수 있음.
// 아래는 서드파티에서 가져온 객체를 심볼을 식별자로 사용하는 예제
// because 심볼이 아닌 문자열 id를 식별자로 사용하게 되면 서드파티에서 id란 값을 식별자로 사용했을때 자동으로 덮어씌워져서 아무리 id를 선언해줘도 무의미해짐
/*

let user = { // 서드파티 코드에서 가져온 객체라고 가정
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] );


// 객체 리터럴 {}에서 직접 선언해 줄 경우에는 대괄호[]를 사용해서 만듬. ""는 안됨

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // "id": 123은 안됨
};
*/


// 심볼은 for 문에서는 사용되지 않음. 마찬가지로 Object.keys()에서도 키가 심볼인 값은 출력되지 않음
//ex)

/* 
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age는 정상적으로 출력되는데 반해, id는 나오지 않음. 심볼이기 때문

alert(Object.keys(user));

//직접 출력하면 가능
alert( "식별자인 심볼 id는 : " + user[id] );
*/

//반면에 Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 객체 내 프로퍼티 전부를 복사.
//ex)

/* 
let id = Symbol("id");
let dummid = Symbol("id")
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] );
 */


//전역심볼을 사용했을 경우 Symbol.keyFor()를 사용해서 이름을 찾을 수 있음.
//ex)

/* 
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
 */

