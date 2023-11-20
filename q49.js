const solution = (numbers) => {
  let sum_set = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++)
      sum_set.add(numbers[i] + numbers[j]);
  }
  return [...sum_set].sort((a, b) => a - b);
};

console.log(solution([5, 0, 2, 7]));
