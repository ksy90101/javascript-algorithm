function solution(priorities, location) {
  let answer = 0;
  let result = location;
  while (priorities.length > 0) {
    if (priorities.some((element) => element > priorities[0])) {
      priorities.push(priorities[0]);
      priorities.shift();
      if (result === 0) {
        result += priorities.length - 1;
      } else {
        result -= 1;
      }
    } else {
      answer++;
      priorities.shift();
      if (result === 0) {
        break;
      } else {
        result -= 1;
      }
    }
  }
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
