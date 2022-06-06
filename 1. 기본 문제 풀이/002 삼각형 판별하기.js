//나의 풀이
function solution(a, b, c) {
  let answer = "yes";
  if (a + b < c || a + c < b || b + c < a) {
    answer = "no";
  }
  return answer;
}
console.log(solution(13, 35, 21));

// 최대값을 구할 수 있는 함수 Math.max()
// let max = Math.max(...list);

// 문제 답
//a,b,c 세 수를 먼저 더하고 최종 맥스를 뺀 값보다 큰지 확인하였다. 
function solution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
