function solution(s) {
    if(s.length % 2 === 0){
       return s.substring(s.length / 2 - 1, s.length / 2 + 1)
    }
    return s.substring(s.length / 2, s.length /2 + 1)
}

const s1 = "abcde";
const s2 = "qwer";

console.log(solution(s1));
console.log(solution(s2));