//가위,바위,보
//나의 풀이
function solution(a, b) {
  let battle = "";
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) battle = "A";
    if (a[i] < b[i]) battle = "B";
    answer += battle;
    battle = "D";
  }
  return answer;
}
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

//문제해답
function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D ";
    else if (a[i] === 1 && b[i] === 3) answer += "A ";
    else if (a[i] === 2 && b[i] === 1) answer += "A ";
    else if (a[i] === 3 && b[i] === 2) answer += "A ";
    else answer += "B ";
  }

  return answer;
}
let a1 = [2, 3, 3, 1, 3];
let b1 = [1, 1, 2, 2, 3];
console.log(solution(a1, b1));
