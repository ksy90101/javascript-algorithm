function solution(arr, divisor) {
    const answer = arr.filter(element => element % divisor === 0);
    if (answer.length === 0) {
        return [-1];
    }
    answer.sort((a, b) => a - b);
    return answer;
}

const arr1 = [5, 9, 7, 10];
const divisor1 = 5;
const arr2 = [2, 36, 1, 3];
const divisor2 = 1;
const arr3 = [3, 2, 6];
const divisor3 = 10;

console.log(solution(arr1, divisor1));
console.log(solution(arr2, divisor2));
console.log(solution(arr3, divisor3));