//최종풀이
function solution(arr1, arr2) {
  let answer = [];
  arr1.forEach((i) => {
    for (let x of arr2) {
      if (i === x) {
        answer.push(x);
      }
    }
  });
  return answer.sort();
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
