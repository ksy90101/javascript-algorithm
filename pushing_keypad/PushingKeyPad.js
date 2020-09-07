function solution(numbers, hand) {
  let answer = "";
  let right = [3, 0];
  let left = [3, 2];

  const locations = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  const rightNumbers = [3, 6, 9];
  const leftNumbers = [1, 4, 7];

  for (let number of numbers) {
    if (rightNumbers.includes(number)) {
      answer += "R";
      right = locations[number];
      continue;
    } else if (leftNumbers.includes(number)) {
      answer += "L";
      left = locations[number];
      continue;
    }
    const currentLocation = locations[number];
    const rightNumber =
      Math.abs(currentLocation[0] - right[0]) +
      Math.abs(currentLocation[1] - right[1]);
    const leftNumber =
      Math.abs(currentLocation[0] - left[0]) +
      Math.abs(currentLocation[1] - left[1]);
    if (rightNumber === leftNumber) {
      if (hand === "right") {
        answer += "R";
        right = locations[number];
        continue;
      }
      answer += "L";
      left = locations[number];
      continue;
    }

    if (rightNumber < leftNumber) {
      answer += "R";
      right = locations[number];
      continue;
    }

    answer += "L";
    left = locations[number];
  }

  return answer;
}

const numbers1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand1 = "right";
const numbers2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand2 = "left";
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand3 = "right";

console.log(solution(numbers1, hand1));
console.log(solution(numbers2, hand2));
console.log(solution(numbers3, hand3));
