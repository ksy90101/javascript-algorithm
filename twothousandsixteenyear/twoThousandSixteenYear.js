function solution(a, b) {
    const date = new Date(2016, a - 1, b);
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return week[date.getDay()];
}

const a = 5;
const b = 24;

console.log(solution(a, b))