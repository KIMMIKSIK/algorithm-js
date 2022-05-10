//나의 풀이
function solution(s) {
  let answer = "",
    list = new Set(s).forEach((item) => {
      answer += item;
    });
  return answer;
}
console.log(solution("kseksdggkset"));

//나의 다른풀이
function solution(s) {
  let alist = [...s];
  let answer = [];
  alist.forEach((item) => {
    if (!answer.includes(item)) answer.push(item);
  });
  return answer.join("");
}
console.log(solution("kseksedgget"));

//문제 해답
function solution(s) {
  let answer = "";
  //console.log(s.indexOf("K"))
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("kseksedgget"));
