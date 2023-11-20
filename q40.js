// function solution(n) {
//   return parseInt(n.toString(3).split("").reverse().join("").toString(10), 3);
// }

const solution = (n) =>
  parseInt(n.toString(3).split("").reverse().join("").toString(10), 3);

console.log(solution(45));
