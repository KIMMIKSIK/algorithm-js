//가운데 문자 출력

// 나의 풀이
function solution(s) {
  let index = 0;
  let answer = "";
  index = parseInt(s.length / 2);
  answer += s[index];
  if (s.length % 2 == 0) {
    answer += s[index - 1];
  }
  return answer;
}
console.log(solution("stuhghghudy"));

// // Math.floor와 parseInt메소드는 둘 다 몫을 정수형으로(소수부분을 잘라버림)만드는 목적이다.
//Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수이며,
//Math.floor 는 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수이며,
//Math.round 는 소수값에 따라 올리거나 버리는 역활을 하는 반올림 함수입니다.

// //문제해답
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}

console.log(solution("study"));
