"use strict";

// 첫 글자를 대문자로 변경하기
//str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)을 만들어라.
//ex)
//ucFirst("john") == "John";
/* 
function ucFirst(str) {
  if(!str) return str;

  return str = str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("john") == "John");
 */


// 스팸 문자열 걸러내기

// str에 'viagra'나 'XXX'라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어라. 대소문자 구분 없이 걸러야 함.
// ex)
//checkSpam('buy ViAgRA now') == true
//checkSpam('free xxxxx') == true
//checkSpam("innocent rabbit") == false
/* 
function checkSpam(str) {
  if(!str) return false;

  if(~str.toUpperCase().indexOf('VIAGRA') || ~str.toUpperCase().indexOf('XXX')) return true;
  else return false;
}

alert(checkSpam('buy ViAgRA now') == true);
alert(checkSpam('free xxxxx') == true);
alert(checkSpam('innocent rabbit') == false);
 */


// 문자열 줄이기
// str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 대체해주는 함수 truncate(str, maxlength)를 만들어라.
// ex)
//truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
//truncate("Hi everyone!", 20) = "Hi everyone!"
/* 
function truncate(str, maxlength) {
  if(str.length <= maxlength) return str;
  else return str = str.slice(0, maxlength - 1) + `…`;
}

alert(truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…");
alert(truncate("Hi everyone!", 20) == "Hi everyone!")
alert(truncate("What I'd like to tell on this topic is:", 20));
 */


// 숫자만 추출하기
// 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있을때 위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)을 만들어라.
// ex)
// alert( extractCurrencyValue('$120') === 120 ); // true
/* 
function extractCurrencyValue(str) {
  return +str.slice(1)
}
alert( extractCurrencyValue('$120') === 120 )
 */