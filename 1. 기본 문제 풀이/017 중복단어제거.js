//나의 풀이
function solution(s) {
  let answer = "";
  new Set(s).forEach((item) => {
    answer += item + " ";
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

//나의 다른 풀이

function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i] + " ";
  }
  return answer;
}
let str1 = ["good", "time", "good", "time", "student"];
console.log(solution(str1));

//문제 해답
function solution(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}
let str2 = ["good", "time", "good", "time", "student"];
console.log(solution(str2));

//filter 배열함수를 사용해서 요소값과 인덱스를 동시에 받아서 처리하였다.
