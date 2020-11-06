function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].toString(2);
    arr2[i] = arr2[i].toString(2);

    arr1[i] =
      arr1[i].length > n
        ? arr1[i]
        : new Array(n - arr1[i].length + 1).join("0") + arr1[i];
    arr2[i] =
      arr2[i].length > n
        ? arr2[i]
        : new Array(n - arr2[i].length + 1).join("0") + arr2[i];
  }

  for (let i = 0; i < n; i++) {
    let binary = "";

    const binaryNumber1 = arr1[i].split("");
    const binaryNumber2 = arr2[i].split("");
    for (let j = 0; j < n; j++) {
      binary +=
        Number.parseInt(binaryNumber1[j]) ||
        Number.parseInt(binaryNumber2[j]) === 1
          ? "#"
          : " ";
    }
    answer.push(binary);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
