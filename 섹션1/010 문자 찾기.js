//나의 풀이
function solution(s, t) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] == t ? answer++ : answer;
  }
  return answer;
}
let str = "COMPUTERPROGRAMMRRING";
console.log(solution(str, "A"));

//다른 풀이
function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}
let st = "COMPUTERPROGRAMMING";
console.log(solution(st, "R"));
