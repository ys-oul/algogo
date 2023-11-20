function solution(n, lost, reserve) {
  let noGymSuit = lost.filter((element) => !reserve.includes(element));
  let yesReserve = reserve.filter((element) => !lost.includes(element));

  let answer = n - noGymSuit.length;

  if (noGymSuit.length === 0) return answer;

  noGymSuit.sort();

  noGymSuit.forEach((element) => {
    if (yesReserve.includes(element - 1)) {
      yesReserve = yesReserve.filter((e) => e !== element - 1);
      answer++;
    } else if (yesReserve.includes(element + 1)) {
      yesReserve = yesReserve.filter((e) => e !== element + 1);
      answer++;
    }
  });
  return answer;
}

// const n = 5;
// const lost = [2, 4];
// const reserve = [1, 3, 5];
const n = 3;
const lost = [3];
const reserve = [1];
console.log(solution(5, [4, 2], [1, 3, 5]));
// solution(n, lost, reserve);
