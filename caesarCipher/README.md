# [\[프로그래머스\] 시저 암호](https://programmers.co.kr/learn/courses/30/lessons/12926)

## 문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 제한 조건
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

### 입출력 예
s | n | result
:---: | :---: | :---:
AB | 1 | BC
z | 1 | a
a B z | 4 | e F d

## 정답 코드
```javascript
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
```
