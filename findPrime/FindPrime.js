function solution(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrimary(i, primes)) {
            primes.push(i)
        }
    }
    return primes.length;
}

function isPrimary(n, primes) {
    for (let i = 0; primes[i] <= Math.sqrt(n); i++) {
        if (n % primes[i] === 0) {
            return false;
        }
    }
    return true;
}

const n1 = 10;
const n2 = 5;

console.log(solution(n1));
console.log(solution(n2));
