//나의 풀이
function solution(s) {
  let answer = 0;
  let text = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    text[i] == s[i] ? answer++ : answer;
  }
  return answer;
}

let str = "KoRAEtimeGoOd";
console.log(solution(str));

//다른풀이
function solution(s) {
  let answer = 0;
  for (let x of s) {
    //let num=x.charCodeAt();
    //if(num>=65 && num<=90) answer++;
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

let st = "KoreaTimeGood";
console.log(solution(st));

// charAt는 index에 해당하는 문자를 리턴하고, chartCodeAt은 유니코드 값을 리턴하는 차이가 있습니다.
// let s = "helloman"
// s.charAt(0) --> h를 return
// s.chartCodeAt(4) 해당 인덱스의 유니코드 return
