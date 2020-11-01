function solution(x, n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x + x * i);
  }
  return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
