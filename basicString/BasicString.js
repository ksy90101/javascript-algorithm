function solution(s) {
    const number = parseInt(s);

    return number == s && (s.length === 4 || s.length === 6);
}

console.log(solution("a123"));
console.log(solution("1234"));
