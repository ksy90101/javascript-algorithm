function solution(arr) {
  const smallNumber = Math.min.apply(null, arr);
  const smallNumberIndex = arr.indexOf(smallNumber);

  arr.splice(smallNumberIndex, 1);

  return arr.length !== 0 ? arr : [-1];
}

const arr1 = [4, 3, 2, 1];
const arr2 = [10];

console.log(solution(arr1));
console.log(solution(arr2));
