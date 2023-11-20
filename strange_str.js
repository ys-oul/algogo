// function solution(s) {
//   return s
//     .split("")
//     .map((s) =>
//       s
//         .split("")
//         .map((v, i) => (i % 2 !== 0 ? v.toLowerCase() : v.toUpperCase()))
//         .join("")
//     )
//     .join("");
// }

// function solution(s) {
//   return s
//     .split(" ")
//     .map((s) =>
//       s
//         .split("")
//         .map((v, i) => (i % 2 !== 0 ? v.toLowerCase() : v.toUpperCase()))
//         .join("")
//     )
//     .join(" ");
// }

const solution = (s) =>
  s
    .split(" ")
    .map((s) =>
      s
        .split("")
        .map((v, i) => (i % 2 !== 0 ? v.toLowerCase() : v.toUpperCase()))
        .join("")
    )
    .join(" ");

console.log(solution("try hello world"));
