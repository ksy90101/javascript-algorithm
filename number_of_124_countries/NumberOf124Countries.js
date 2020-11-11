function solution(n) {
  let answer = "";
  const numbers = [4, 1, 2];
  while (n > 0) {
    const temp = answer;
    answer = numbers[n % 3] + temp;
    if (n % 3 === 0) {
      n--;
    }
    n = Number.parseInt(n / 3);
  }
  return answer;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(solution(10));
