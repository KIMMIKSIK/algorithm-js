//나의 풀이
function solution(s) {
  let answer = s.toUpperCase();
  return answer;
}
let str = "ItisTimeToStudy";
console.log(solution(str));

//다른 풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
    //if(x === x.toLowerCase()) answer+=x.toUpperCase();
    // else answer += x;
  }
  return answer;
}
let st = "ItisTimeToStudy";
console.log(solution(st));
