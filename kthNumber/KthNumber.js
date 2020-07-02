function solution(array, commands) {
    const answer = [];
    for (let index in commands) {
        const copyArray = array.slice(commands[index][0] - 1, commands[index][1]);
        const sortArray = copyArray.sort((a, b) => a - b);
        answer.push(sortArray[commands[index][2] - 1]);
    }
    return answer;
}

// Test Case
const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
console.log(solution(array, commands))