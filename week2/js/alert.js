let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}

alert("참트루 잼민이체 ㅋㅋㄹㅃㅃ")

ask (
  "동의?",
  function() {alert("어 보감"); },
  function() {alert("응 아니야"); }
);


let user = {"name space": "아무말"};

alert(user["name space"])