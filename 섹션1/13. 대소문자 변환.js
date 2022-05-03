//나의 풀이
function solution(s) {
  let bigWord = s.toUpperCase();
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    s[i] == bigWord[i]
      ? (answer += s[i].toLowerCase())
      : (answer += bigWord[i]);
  }
  return answer;
}
console.log(solution("StuDyGGpp"));

//다른 풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}
console.log(solution("StuDyGGpp"));
