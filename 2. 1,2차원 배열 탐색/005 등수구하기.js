//등수구하기
//나의 풀이
function solution(arr) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) list[i] = ++count;
      if (arr[i] === 100) list[i] = 1;
    }
  }
  return list;
}
let arr = [87, 89, 92, 100, 92];
console.log(solution(arr));

//문제해답

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr1 = [87, 89, 92, 100, 76];
console.log(solution(arr1));
