function solution(x) {
  let number = x;
  let sum = 0;
  while (number !== 0) {
    sum += number % 10;
    number = parseInt(number / 10);
  }
  return x % sum === 0;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
