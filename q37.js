function solution(arr1, arr2) {
  arr1.map((subarr, i) =>
    subarr.map((element, j) => (arr1[i][j] = element + arr2[i][j]))
  );
  return arr1;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
