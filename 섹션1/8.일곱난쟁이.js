//나의 풀이
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        return answer;
      } else {
        console.log(j);
        continue;
      }
    }
  }
}

let arr = [20, 7, 23, 19, 9, 20, 8, 10, 1];
console.log("ddddd", solution(arr));

//문제 해답
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

let ar = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(ar));
