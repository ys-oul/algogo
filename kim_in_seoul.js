function solution(seoul) {
  let answer;
  seoul.forEach((element, index) => {
    if (element === "Kim") answer = index;
  });
  return "김서방은 " + answer + "에 있다";
}

console.log(solution(["Jane", "Kim"]));
// solution(["Jane", "Kim"]);
