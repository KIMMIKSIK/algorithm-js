function solution(arr1, arr2) {
  let stack = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      stack.push(arr1[p1]);
      p1++;
    } else {
      stack.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 === n) {
    for (let i = p2; i < m; i++) {
      stack.push(arr2[i]);
    }
  } else {
    for (let i = p1; i < n; i++) {
      stack.push(arr1[i]);
    }
  }
  return stack;
}
