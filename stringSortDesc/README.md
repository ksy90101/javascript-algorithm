# [\[프로그래머스\] 문자열 내림차순으로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/12917)

## 참고자료
- [Array.sort()](https://rutgo-letsgo.tistory.com/49)

## 문제 설명
- 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
- s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

### 제한 사항
- str은 길이 1 이상인 문자열입니다.

입출력 | 예
:---: | :---:
s | return
Zbcdefg | gfedcbZ

## 정답

```javascript
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
```
