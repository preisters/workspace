// 수를 입력받아 덧셈하기
// 사용자에게 두 수를 입력받고, 두 수의 합을 출력해주는 스크립트를  작성

/* 
a = +prompt("a는?", "2");
b = +prompt("b?", "4");
alert( a + b );

// 혹은 다른 방법으로는

function Calculator() {
  this.sum = function() {
    return this.a + this.b
  }
  this.read = function() {
    this.a = +prompt( "a는 뭐다?", "3" );
    this.b = +prompt( "고럼 b는 뭐디?", "5" );
  }
}

let cal = new Calculator()

cal.read()

alert( "답은 " + cal.sum() );
 */


// toFixed(1) == 6.3인 이유는 무엇일까요?
// 이 문서에 따르면 Math.round와 toFixed는 둘 다 가장 가까운 어림수를 구해줍니다. 0..4는 버림하고, 5..9는 올림합니다.
//alert( 1.35.toFixed(1) ); // 1.4
//위 예시와 유사한 아래의 경우, 6.35가 6.4가 아닌 6.3으로 반올림되는 이유는 무엇일까요?
//alert( 6.35.toFixed(1) ); // 6.3
//어떻게 하면 6.35를 제대로 반올림할 수 있을까요?

/*
alert( (6.35*10).toFixed(1) / 10 );
*/


// 숫자를 입력할 때까지 반복하기
//사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber 만들기
//반환되는 값은 꼭 숫자형 값
//사용자가 아무 입력도 하지 않거나 '취소’를 누르면 입력받기를 멈추고 null을 반환
/* 
function readNumber() {
  let num;

  do {
    num = prompt("아무거나 숫자만 입력해봐라", "꼭 숫자만 입력해라");
  } while(!isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`입력한 값 : ${readNumber()}`);
 */


//간헐적으로 발생하는 무한루프
//아래 코드는 무한루프다. 이유는?
/* 
let i = 0; //
while (i != 10) { // i가 10이어야만 루프 종료 but
  i += 0.2;  // 0.2는 확실한 0.2가 아닌 근사치이기 때문에 10이 될 수 없다
}
 */


// 최소,최댓값 사이의 난수
// Math.random()는 0에서 1 사이의 임의 값을 생성합니다.
// ramdom(min, max) 함수를 작성하여 min에서 max 사이의 임의의 실수를 출력하는 함수를 작성하시오
/* 
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
 */


// 최소, 최댓값 사이의 정수
// ramdomInterger(min, max) 함수를 작성하여 min 에서 max 사이의 임의의 정수를 출력하는 함수를 작성하시오.
// min, max 사이의 모든 숫자는 동일한 확률로 나타나야 함.

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return  Math.round(rand);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );