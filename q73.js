function solution(park, routes) {
  park.forEach((row, i) => {
    [...row].forEach((element, j) => {
      console.log(element, i, j);
    });
  });
}

solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]);
