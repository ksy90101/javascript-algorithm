function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = [];
  let sum = 0;
  for (let truckWeight of truck_weights) {
    while (true) {
      if (bridge.length === 0) {
        bridge.push(truckWeight);
        answer++;
        sum += truckWeight;
        break;
      } else if (bridge_length === bridge.length) {
        sum -= bridge.shift();
      } else {
        if (sum + truckWeight > weight) {
          bridge.push(0);
          answer++;
        } else {
          bridge.push(truckWeight);
          answer++;
          sum += truckWeight;
          break;
        }
      }
    }
  }
  return answer + bridge_length;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
