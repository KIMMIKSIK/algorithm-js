//나의 풀이
function solution(n, arr) {
  let answer = [];
  let add = arr.map((item) => {
    let total = 0;
    let word = "" + item;
    for (let i = 0; i < word.length; i++) {
      total += parseInt(word[i]);
    }
    return total;
  });
  let max = Math.max(...add);
  for (let i = 0; i < add.length; i++) {
    if (max === add[i]) {
      answer.push(arr[i]);
    }
  }
  return Math.max(...answer);
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// reduce를 활용한 다른 풀이
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr1 = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr1));

// 문제 해답
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr2 = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr2));
