const solution = (t, p) => {
  let count = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (Number(p) >= Number(t.substr(i, p.length))) count++;
  }
  return count;
};

console.log(solution("3141592", "271"));
