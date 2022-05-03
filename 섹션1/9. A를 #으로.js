//나의 풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x == "A") x = "#";
    answer += x;
  }
  return answer;
}
let str = "BANANA";
console.log(solution(str));

//다른 풀이법(정규표현식)
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let st = "BANANA";
console.log(solution(st));
