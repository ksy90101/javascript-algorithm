function solution(participants, completions) {
    let answer = '';
    const map = new Map();
    participants.forEach(participant => {
        if(map.get(participant) == null){ // 키가 존재하지 않는 경우에는 넣어줘야 한다.
            map.set(participant, 1);
            return;
        }
        map.set(participant, map.get(participant) + 1); // 동명이인이 존재하기 때문에 +1을 해줘야 한다.
    })

    completions.forEach(completion => {
        map.set(completion, map.get(completion) - 1); // 완주자 검증로직
    })

    participants.forEach(participant => {
        if(map.get(participant) === 1){ // 1이 남은 사람만 완주자가 아닐것이기 때문에 조건문 작성
            answer = participant;
            return;
        }
    })
    return answer;
}

// Test Case
const participant1 = ["leo", "kiki", "eden"];
const completion1 = ["eden", "kiki"];
const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion2 = ["marina", "josipa", "nikola", "filipa"];
const participant3 = ["mislav", "stanko", "mislav", "ana"];
const completion3 = ["stanko", "mislav", "ana"];

console.log(solution(participant1, completion1));
console.log(solution(participant2, completion2));
console.log(solution(participant3, completion3));