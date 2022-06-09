//나의 풀이
function solution(s) {
  let check = [];
  for (let i = 0; i < s.length; i++) {
    let count = 1;
    if (check.includes(s[i])) continue;
    for (let j = 1; j < s.length; j++) {
      if (s[i] === s[j + i]) {
        count++;
      }
    }
    check.push(s[i]);
    count > 1 ? check.push(count) : count;
  }

  return check.join("");
}

let str = "KKHSSSSSSSE";
console.log(solution(str));

//나의 다른 풀이
function solution(s) {
  let answer = "";
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count++;
    if (s[i] !== s[i + 1]) {
      answer += s[i];
      if (count > 1) answer += count;
      count = 1;
    }
  }
  return answer;
}

let str1 = "KKHSSSSSSSE";
console.log(solution(str1));

//문제 해답
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str2 = "KKHSSSSSSSE";
console.log(solution(str2));
