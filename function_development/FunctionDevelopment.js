function solution(progresses, speeds) {
  const answer = [];
  const queue = new Queue();

  for (let i = 0; i < progresses.length; i++) {
    queue.enqueue(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let progressDate = queue.dequeue();
  let count = 1;
  while (!queue.isEmpty()) {
    let progressDate2 = queue.dequeue();
    if (progressDate >= progressDate2) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      progressDate = progressDate2;
    }
  }

  answer.push(count);
  return answer;
}

class Queue {
  constructor() {
    this._arr = [];
  }

  enqueue(item) {
    this._arr.push(item);
  }

  dequeue() {
    return this._arr.shift();
  }

  isEmpty() {
    return this._arr.length === 0;
  }
}

console.log(solution([93, 30, 55], [1, 25, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.log(solution([99, 1, 99, 1], [1, 1, 1, 1]));
