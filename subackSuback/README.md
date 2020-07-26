# [\[프로그래머스\] 수박수박수박수박수박수?](https://programmers.co.kr/learn/courses/30/lessons/12922https://programmers.co.kr/learn/courses/30/lessons/12922)

## 문제 설명
길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

### 제한 조건
- n은 길이 10,000이하인 자연수입니다.1

### 입출력 예
n | return
:---: | :---:
3 | 수박수
4 | 수박수박

## 정답코드

```javascript
function solution(n) {
    return String('수박').repeat(n).substring(0, n);
}

const n1 = 3;
const n2 = 4;

console.log(solution(n1));
console.log(solution(n2));

```