//나의 풀이
let isPrime = (item) => {
  let items = [];
  item.forEach((item) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(item)); i++) {
      if (item % i === 0) {
        return "";
      }
    }
    items.push(item);
  });
  return items;
};

function solution(arr) {
  let answer = [];
  let backCount = arr.map((item) => {
    let count = "";
    let stringItem = String(item);
    for (let i = stringItem.length - 1; i >= 0; i--) {
      count += stringItem[i];
    }
    return parseInt(count);
  });
  return isPrime(backCount).join(" ");
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 다른 사람의 풀이
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr1 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr1));

// 문제해답
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr2 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr2));

// 도움
// for (x of k){
//   let res = 0;
//   while(x){
//     let t = x%10
//     res = res*10+t;
//     x = parseInt(x/10);
//   }
// }

// 예를 들어 723이라는 숫자가 있다면 위에 식은 327로 순서를 바꾸는 식이다.
