function solution(s) {
    const split = s.split("");

    let answer = '';
    let index = 0;

    for (let s of split){
        if(s === ' '){
            answer += ' ';
            index = 0;
            continue;
        }
        if(index % 2 === 0){
            answer += s.toUpperCase();
            index++;
            continue;
        }
        answer += s.toLowerCase();
        index++;
    }
    return answer;
}

console.log(solution("try hello world"));
