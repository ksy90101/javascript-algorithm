function solution(dartResult) {
  const answer = [];
  let number = "";
  const splitedDartResult = dartResult.split("");

  for (const result of splitedDartResult) {
    if (result === "*") {
      answer[answer.length - 1] *= 2;
      if (answer.length > 1) {
        answer[answer.length - 2] *= 2;
      }
      continue;
    }
    if (result === "#") {
      answer[answer.length - 1] *= -1;
      continue;
    }
    if (result === "S") {
      answer.push(Math.pow(Number.parseInt(number), 1));
      number = "";
      continue;
    }
    if (result === "D") {
      answer.push(Math.pow(Number.parseInt(number), 2));
      number = "";
      continue;
    }
    if (result === "T") {
      answer.push(Math.pow(Number.parseInt(number), 3));
      number = "";
      continue;
    }
    number += result;
  }

  let sum = 0;

  answer.forEach((n) => (sum = sum + n));

  return sum;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
