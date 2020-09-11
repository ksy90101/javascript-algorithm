function solution(arr) {
  let sum = 0;

  arr.forEach((number) => (sum += number));

  return sum / arr.length;
}

solution([1, 2, 3, 4]);
solution([5, 5]);
