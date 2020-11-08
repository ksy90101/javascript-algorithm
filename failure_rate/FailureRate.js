function solution(N, stages) {
  const answer = [];
  const failures = [];

  for (let i = 1; i < N + 1; i++) {
    let failureCount = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] < i) {
        stages[j] = 0;
      }
      if (i === stages[j]) {
        failureCount++;
      }
    }
    if (Number.isNaN(failureCount / stages.filter((n) => n !== 0).length)) {
      failures.push(0);
      continue;
    }
    failures.push(failureCount / stages.filter((n) => n !== 0).length);
  }

  const sorted = clone(failures);
  sorted.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < failures.length; j++) {
      if (sorted[i] === failures[j]) {
        answer.push(j + 1);
        failures[j] = -1;
      }
    }
  }

  return answer;
}

function clone(obj) {
  let output = [];
  for (let i in obj) {
    output[i] = obj[i];
  }
  return output;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4]));
console.log(solution(8, [1, 2, 3, 4, 5, 6, 7]));
