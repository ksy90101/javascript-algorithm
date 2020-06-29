function solution(answers) {
    const result = [];

    const studentAnswer1 = [1, 2, 3, 4, 5];
    const studentAnswer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const studentAnswer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const student1 = answers.filter((answer, index) => answer === studentAnswer1[index % studentAnswer1.length]).length;
    const student2 = answers.filter((answer, index) => answer === studentAnswer2[index % studentAnswer2.length]).length;
    const student3 = answers.filter((answer, index) => answer === studentAnswer3[index % studentAnswer3.length]).length;

    const max = Math.max(student1, Math.max(student2, student3));

    if (max === student1) {
        result.push(1);
    }
    if (max === student2) {
        result.push(2);
    }
    if (max === student3) {
        result.push(3);
    }

    return result;
}

const answers1 = [1, 2, 3, 4, 5];
const answers2 = [1, 3, 2, 4, 2];

console.log(solution(answers1));
console.log(solution(answers2));