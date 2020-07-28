function solution(s, n) {
    const toLowerChar = [];
    const toUpperChar = [];
    let answer = '';
    for (let i = 0; i < 26; i++){
        toLowerChar.push(String.fromCharCode(97 + i));
        toUpperChar.push(String.fromCharCode(65 + i));
    }
    const split = s.split("")
    for (let value of split){
        if(toLowerChar.includes(value)){
            const index = (toLowerChar.findIndex(it => it === value) + n) % 26;
            answer += toLowerChar.find((it, idx) => idx === index);
            continue;
        }else if(toUpperChar.includes(value)){
            const index = (toUpperChar.findIndex(it => it === value) + n) % 26;
            answer += toUpperChar.find((it, idx) => idx === index);
            continue;
        }
        answer += value;
    }

    return answer;
}

const s1 = 'AB';
const n1 = 1;
const s2 = 'z';
const n2 = 1;
const s3 = 'a B z';
const n3 = 4;

console.log(solution(s1, n1));
console.log(solution(s2, n2));
console.log(solution(s3, n3));
