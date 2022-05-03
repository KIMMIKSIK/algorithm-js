//나의 풀이
function solution(day, arr) {
  let answer = 0;
  let carNumber = arr.map((x) => x % 10);
  let countIll = carNumber.filter((x) => x == day).length;
  answer = countIll;
  return answer;
}
arr = [27, 27, 11, 47, 53, 17, 33];
console.log(solution(0, arr));

//나의 다른 풀이

function solution(day, arr) {
  let carNumber = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (day == arr[i] % 10) count++;
  }
  answer = count;

  return answer;
}
ar = [27, 27, 11, 47, 53, 17, 33];
console.log(solution(7, ar));

//문제 해답
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
