/*  생성자 함수 : 함수 이름 첫 글자는 대문자로, 반드시 'new' 연산자를 붙여서 실행하는 것이 관례
function User(name, age) {
  this.name = name;
  this.isAdmin = false;
  this.age = age;
}

let user = new User("철수", 19);

alert(user.name);
alert(user.isAdmin);
alert(user.age); */

/*  1회용 코드의 재사용을 막는 방법, 겸사겸사 코드 캡슐화까지 가능
let useless = new function() {
  this.name = "John";
  this.isAdmin = false;
}

alert(useless.name);
alert(useless.isAdmin);
*/

/* 잘 안쓰이는 문법, new와 함꼐 호출됐는지 확인하는 방법
function newtarget() {
  alert(new.target);
}

newtarget();

new newtarget(); */

/* new를 통해 새로운 객체 생성을 알 수 있기 때문에 꼭 필요한 경우 아니면 사용 자제
function newtarget(name) {
  if (!new.target) { //           new 없이 호출해도
    return new newtarget(name); // new를 불여줌
  }

  this.name = name;

}

let jinsu = newtarget("진수");
alert(jinsu.name); */


function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "제 이름은 " + this.name + "입니다." );
  };
}

let john = new User("존");

john.sayHi();

/* 위의 생성자는 아래와 같음
john = {
  name: "존",
  sayHi: function() {
    alert( "제 이름은" + this.name + "입니다." );
  };
}
*/