function solution(n, lost, reserve) {
    let answer = n - lost.length;

    for (let i = 0; i < reserve.length; i++) {
        if (reserve[i] === -1) {
            continue;
        }
        for (let j = 0; j < lost.length; j++) {
            if (lost[j] === -1) {
                continue;
            }
            if (reserve[i] === lost[j]) {
                answer++;
                reserve[i] = -1;
                lost[j] = -1;
                break;
            }
        }
    }
    for (let i = 0; i < reserve.length; i++) {
        if (reserve[i] === -1) {
            continue;
        }
        for (let j = 0; j < lost.length; j++) {
            if (lost[j] === -1) {
                continue;
            }
            if (Math.abs(reserve[i] - lost[j]) === 1) {
                answer++;
                reserve[i] = -1;
                lost[j] = -1;
                break;
            }
        }
    }

    return answer;
}

const n1 = 5;
const lost1 = [2, 4]
const reserve1 = [1, 3, 5]

const n2 = 7
const lost2 = [2, 4, 3]
const reserve2 = [3, 1]

const n3 = 3
const lost3 = [3]
const reserve3 = [1]

console.log(solution(n1, lost1, reserve1));
console.log(solution(n2, lost2, reserve2));
console.log(solution(n3, lost3, reserve3));