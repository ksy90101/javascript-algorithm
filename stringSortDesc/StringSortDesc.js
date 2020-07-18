function solution(s) {
    return s.split("").sort((a, b) => {
        if (a > b) {
            return -1;
        } else if (a < b) {
            return 1;
        }
        return 0
    }).join("");
}

const s = "Zbcdefg";
console.log(solution(s));
