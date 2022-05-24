//나의 풀이
function solution(s) {
  let condition = "yes";
  let answer = s.toLowerCase();
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== answer[answer.length - 1 - i]) condition = "no";
    console.log(condition);
  }
  return condition;
}

let str = "hgoooGh";
console.log(solution(str));

//문제 해답
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}
let str1 = "goooG";
console.log(solution(str1));
