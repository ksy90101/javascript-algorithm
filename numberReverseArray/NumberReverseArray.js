function solution(n) {
    const answer = [];
    while (n !== 0){
        answer.push(n % 10);
        n = Number.parseInt(n / 10);
    }
    return answer;
}

const n = 12345;
console.log(solution(n));
