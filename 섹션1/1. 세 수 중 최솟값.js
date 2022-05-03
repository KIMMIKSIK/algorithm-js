//나의 풀이
function solution(a, b, c) {
  let min = a;
  if (min > b) {
    min = b;
  }
  if (min > c) {
    min = c;
  }

  return min;
}

console.log(solution(7, 5, 8));

//문제 답

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
