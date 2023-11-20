function solution(n, m) {
  let gcd,
    lcm = n * m;
  while (n) {
    let tmp = m % n;
    m = n;
    n = tmp;
  }
  gcd = m;
  lcm = lcm / gcd;
  let answer = [gcd, lcm];
  return answer;
}

console.log(solution(36, 48));
