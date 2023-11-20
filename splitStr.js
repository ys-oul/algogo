function solution(s) {
  let arr = [...s];
  let answer = 0;
  while (arr.length !== 0) {
    let X = arr[0];
    let numX = 1,
      numNotX = 0,
      idx = 1;

    while (numX !== numNotX) {
      if (X == arr[idx]) numX++;
      else numNotX++;
      idx++;
    }
    answer++;
    arr.splice(0, idx);
  }
  return answer;
}

console.log(solution("aaabbaccccabba"));
