//가운데 문자 출력

// 나의 풀이
function solution(s) {
  let index = 0;
  let answer = "";
  index = Math.ceil(s.length / 2);
  answer += s[index];
  if (s.length % 2 == 0) {
    answer += s[index - 1];
  }
  return answer;
}
console.log(solution("stuhghghudy"));

//parseInt는 본래 문자형을 통해 정수값을 출력하는 함수이며 만약 정수형으로 바꿀수 없는 문자를 만나면 생략하고 종료 된다
//Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수이며,(천장)
//Math.floor 는 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수이며,(바닥)
//Math.round 는 소수값에 따라 올리거나 버리는 역활을 하는 반올림 함수입니다.(기본)

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

// subsrt은

//substr() 함수는, 파라미터로 입력받은 start index부터 length 길이만큼 string을 잘라내어 반환하는 함수입니다..
// 첫번째 글자의 index는 0에서 시작합니다.
