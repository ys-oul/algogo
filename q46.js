function solution(s) {
  let num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let tmp = "";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      tmp += s[i];
      let idx = num.indexOf(tmp);
      if (idx > -1) {
        answer += idx;
        tmp = "";
      }
    } else answer += s[i];
  }

  return +answer;
}

console.log(solution("one4seveneight"));
