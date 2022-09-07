function solution(arr1, arr2) {
  let stack = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) stack.push(arr1[p1++]);
    else stack.push(arr2[p2++]);
  }
  while (p1 < n) stack.push(arr2[p1++]);
  while (p2 < m) stack.push(arr1[p2++]);
  return stack;
}
