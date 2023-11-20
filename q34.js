function solution(s) {
  //   const code = [];
  //   s.split("").forEach((element, index) => code.push(element.charCodeAt()));
  //   return code
  //     .sort((a, b) => b - a)
  //     .map((element) => String.fromCharCode(element))
  //     .join("");
  return [...s].sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
