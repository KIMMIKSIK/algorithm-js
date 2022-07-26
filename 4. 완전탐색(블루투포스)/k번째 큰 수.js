function solution(n, k, card) {
  let total = new Set();
  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      for (let x = j + 1; x < card.length; x++) {
        total.add(card[i] + card[j] + card[x]);
      }
    }
  }
  let answer = [...total].sort((a, b) => b - a);

  return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
