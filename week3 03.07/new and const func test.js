//  new A() == new B() 가 성립 가능한 함수 A와 B를 만드는 것이 가능한지 증명

/* 이렇게 할 경우 서로 다른 Object 이기 때문에 false
function A(name) { this.name = name }
function B(name) { this.name = name }

let a = new A;
let b = new B;

alert( a == b ); // true
alert( a );
alert( b ); 
*/

//@@@@@@@@@@@@@@@@@@@@--------정답----------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 함수 외부에서 오브젝트를 하나 선언해준 뒤 같은 오브젝트를 리턴해주면 해결가능

/* let obj = {};

function A(name) { return obj }
function B(name) { return obj }

let a = new A;
let b = new B;

alert( a == b ); // true */

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 계산기 만들기
/* 
아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다. */

/* function Calculator() {
  this.read = function() {
    this.a = +prompt("a를 입력해주세여", "0");
    this.b = +prompt("b를 입력바람", "0");
  };
  
  this.sum = function() {
    return this.a + this.b
  };

  this.mul =  function() {
    return this.a * this.b;
  };1
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
 */

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 누산기 만들기
/* 
생성자 함수 Accumulator(startingValue)를 만들어 보세요.

Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다. */

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value = this.value + +prompt("값 입력ㄱㄱ", "0");
  };

}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함