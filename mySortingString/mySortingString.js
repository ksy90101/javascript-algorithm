function solution(strings, n) {
    strings.sort((a,b) => {
        if(a.charAt(n) === b.charAt(n)){
            return a > b ? 1 : -1;
        }
        return a.charAt(n) > b.charAt(n) ? 1 : -1;
    });
    return strings;
}

const strings1 = ["sun", "bed", "car"]
const n1 = 1;
const strings2 = ["abce", "abcd", "cdx"]
const n2 = 2

console.log(solution(strings1, n1));
console.log(solution(strings2, n2));
