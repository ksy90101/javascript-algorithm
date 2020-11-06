function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;
  let maxSupport = 0;
  console.log(d);
  for (const money of d) {
    maxSupport += money;
    if (maxSupport > budget) {
      break;
    }
    answer++;
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
