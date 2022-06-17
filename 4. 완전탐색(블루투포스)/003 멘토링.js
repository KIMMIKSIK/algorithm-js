// 나의 풀이
function solution(test) {
  for (let i = 1; i < test[0].length + 1; i++) {
    for (let j = 1; j < test[0].length + 1; j++) {
      if (i === j) continue;
      let cnt = 1;
      for (let x of test) {
        for (let k = 0; k < test.length; k++) {
          for (let s = 0; s < x.length; s++) {
            if (x[k] === i && x[s] === j) {
              if (x.indexOf(i) < x.indexOf(j)) cnt++;
              if (cnt > 3) answer++;
            }
          }
        }
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// 문제 해답(블루투포스 완전탐색을 통해 문제해결하기)
function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

let arr1 = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr1));
