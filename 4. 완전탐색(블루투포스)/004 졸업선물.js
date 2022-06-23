// 나의 풀이
function solution(m, p) {
  let list = [];
  for (let i = 0; i < p.length; i++) {
    let answer = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let count = 0;
    let newP = [...p];
    let map = newP.map((item) => [...item]);
    map[i][0] = map[i][0] / 2;
    let pList = map.map((item) => item.reduce((acc, prv) => acc + prv));
    let sort = pList.sort((a, b) => a - b);

    for (let j = 0; j < sort.length; j++) {
      answer = sort[j] + answer;
      console.log(sort[j]);
      if (answer > 28) break;
      count++;
    }

    list.push(count);
  }

  return Math.max(...list);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

// 문제 해답
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr1 = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr1));
