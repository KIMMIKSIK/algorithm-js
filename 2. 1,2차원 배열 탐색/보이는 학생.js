//보이는 학생
//나의 풀이
function solution(arr) {
  let answer = [arr[0]];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      answer.push(max);
    }
  }
  return answer.length;
}
let arr = [130, 135, 148, 140, 145, 160, 150, 150, 152, 153];
console.log(solution(arr));

//문제 해답
function solution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}
let arr1 = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr1));
