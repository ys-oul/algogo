function solution(s, skip, index) {
  let sArr = [...s];
  let alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );
  let skippedAlpha = alphabet.filter((element) => {
    return !skip.includes(element);
  });

  let answer = "";
  sArr.forEach((element) => {
    let tmpChar = skippedAlpha.indexOf(element) + index;
    if (tmpChar >= skippedAlpha.length) tmpChar %= skippedAlpha.length;
    answer += skippedAlpha[tmpChar];
  });

  return answer;
}

solution("aukks", "wbqd", 5);
