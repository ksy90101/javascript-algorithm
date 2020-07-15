function solution(s) {
    const pNumber = s.toLowerCase().split("").filter(n => n === "p").length;
    const yNumber = s.toLowerCase().split("").filter(n => n === "y").length;
    return pNumber === yNumber;
}

const s1 = "pPoooyY";
const s2 = "Pyy";

console.log(solution(s1));
console.log(solution(s2));
