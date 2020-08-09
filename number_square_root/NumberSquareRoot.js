function solution(n) {
    const sqrt = Math.sqrt(n);
    const intSqrt = Number.parseInt(Math.sqrt(n));

    if(sqrt === intSqrt){
        return Math.pow(sqrt + 1, 2);
    }

    return -1;
}

console.log(solution(121));
console.log(solution(3))
