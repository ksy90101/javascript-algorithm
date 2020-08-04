function solution(n)
{
    let answer = 0;
    while (n !== 0){
        answer += n % 10;
        n = Number.parseInt(n / 10);
    }
    return answer;
}

const n1 = 123;
const n2 = 987;

console.log(solution(n1));
console.log(solution(n2));
