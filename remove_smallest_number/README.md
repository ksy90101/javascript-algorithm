# [\[프로그래머스\] 제일 작은 수 제거하기](https://programmers.co.kr/learn/courses/30/lessons/12935)

## 참고자료
- [배열 내의 최대값 최소값 찾기(Math.min.apply(), Math.max.apply())](https://github.com/ksy90101/TIL/blob/master/javascript/find-max-min-number.md)
- [배열 내 특정 값 삭제하기](https://github.com/ksy90101/TIL/blob/master/javascript/remove-array-value.md)

## 문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

## 제한 조건
- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

### 입출력 예
arr | return
:---: | :---:
[4,3,2,1] | [4,3,2]
[10] | [-1]

## 정답코드

```jsx
function solution(arr) {
  const smallNumber = Math.min.apply(null, arr);
  const smallNumberIndex = arr.indexOf(smallNumber);

  arr.splice(smallNumberIndex, 1)

  return arr.length !== 0 ? arr : [-1];
}

const arr1 = [4,3,2,1];
const arr2 = [10];

console.log(solution(arr1));
console.log(solution(arr2));
```
