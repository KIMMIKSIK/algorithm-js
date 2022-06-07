// 나의 풀이
function solution(str) {
  let answer = "";
  for (i of str) {
    isNaN(i) ? i : (answer += i);
  }
  return parseInt(answer, 10);
}
let str = "g0en2T0s8eSoft";
console.log(solution(str));

// 문자와 숫자가 섞여있는 경우에 숫자만 뽑고 싶다면
// parseInt("02932") 0이 먼저 나온다면 알아서 앞의 0을 잘라준다.

//문제 해답
function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

let str1 = "g0en2T0s8eSoft";
console.log(solution(str1));

// isNaN은 주어진 파라메타를 숫자형으로 형 변환시킨후 NaN이면 true를 출력
// number.isNaN은 그냥 isNaN보다 더 강력하게 숫자형 변환 없이 바로 NaN인지 아닌지만 구분
