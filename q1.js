//require: 외부 모듈 가져오는 메소드
//readline: 한 번에 한줄 씩 데이터 읽기 위한 인터페이스 제공하는 모듈
const readline = require("readline");

//인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //'line': 입력받는 값을 한 줄식 읽어 문자열 타입으로 전달하는 역할 하는 이벤트
  //입력받은 값을 처리하는 코드->'line'이벤트로 받은 내용 처리
  input = [line];
  rl.close();
}).on("close", function () {
  str = input[0];
  console.log(str);
});
