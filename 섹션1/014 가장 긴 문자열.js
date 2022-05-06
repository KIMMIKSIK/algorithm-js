//나의 풀이
function solution(s) {
  let answer = s[0];
  s.forEach((item) => {
    answer.length < item.length ? (answer = item) : answer;
  });
  return answer;
}

let str1 = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str1));

//나의 다른 풀이
function solution(s) {
  let answer = s[0];
  for (let i = 1; i < s.length; i++) {
    if (answer.length < s[i].length) {
      answer = s[i];
    }
  }
  return answer;
}

let str2 = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str2));

//문제 해답
function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str3 = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str3));
