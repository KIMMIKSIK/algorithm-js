function solution(s, t) {
  let answer = "";
  let index = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) index.push(i);
  }
  console.log(index);

  for (let i = 0; i < s.length; i++) {
    if (i - index[count] > Math.floor(index[count + 1] - index[count]) / 2) {
      count++;
    }
    answer += Math.abs(index[count] - i);
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

//나의 다른 풀이(for문을 양쪽으로 한번씩 총 2 번 돌리는 방법)

function solution(s, t) {
  let answer = [];
  let count = 1000;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "e") count = 0;
    else count++;
    answer.push(count);
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "e") count = 0;
    else count++;
    answer[i] > count ? (answer[i] = count) : count;
  }

  return answer;
}

let str1 = "teachermode";
console.log(solution(str1, "e"));

//문제 해답
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str2 = "teachermode";
console.log(solution(str2, "e"));
