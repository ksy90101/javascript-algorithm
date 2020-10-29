function solution(n) {
  let threeBase = [];
  let answer = 0;
  while (n !== 0) {
    threeBase.push(n % 3);
    n = Number.parseInt(n / 3);
  }
  threeBase = threeBase.reverse();
  for (let i = 0; i < threeBase.length; i++) {
    answer += threeBase[i] * Math.pow(3, i);
  }

  return answer;
}

console.log(solution(45));
console.log(solution(125));
