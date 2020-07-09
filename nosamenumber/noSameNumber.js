function solution(arr)
{
    return arr.filter((value, index) => value !== arr[index +1]);
}

const arr1 = [1,1,3,3,0,1,1];
const arr2 = [4,4,4,3,3];

console.log(solution(arr1));
console.log(solution(arr2));