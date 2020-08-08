function solution(n) {
    const numbers = [];
    while (n !== 0){
        numbers.push(n % 10);
        n = Number.parseInt(n / 10);
    }
    numbers.sort((a, b) => b -a)
    return Number.parseInt(numbers.join(""));
}

const n = 118372;

console.log(solution(n));
