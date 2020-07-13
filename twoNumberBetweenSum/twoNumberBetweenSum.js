function solution(a, b) {
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i
    }
    return answer;
}

const a1 = 3;
const b1 = 5;
const a2 = 3;
const b2 = 3;
const a3 = 5;
const b3 = 3;

console.log(solution(a1, b1));
console.log(solution(a2, b2));
console.log(solution(a3, b3));