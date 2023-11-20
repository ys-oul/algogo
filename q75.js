const solution = (s) =>
  s.split(" ").reduce((min, cur) => (+min > +cur ? +cur : +min)) +
  " " +
  s.split(" ").reduce((max, cur) => (+max < +cur ? +cur : +max));

console.log(typeof solution("-3 -2 -5 -4"));
console.log(solution("4 2 3 4"));
