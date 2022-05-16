//큰 수 출력하기
//나의 풀이
function solution(arr) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) answer.push(arr[i]);
  }
  return answer;
}
let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

//문제 해답
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

let arr1 = [7, 3, 9, 5, 6, 12];
console.log(solution(arr1));
