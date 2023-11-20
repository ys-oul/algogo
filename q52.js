const solution = (a, b, n) => {
  let total = 0;
  while (n > a - 1) {
    let newCoke = Math.floor(n / a) * b;
    total += newCoke;
    n = newCoke + (n % a);
  }
  return total;
};

console.log(solution(3, 1, 20));
