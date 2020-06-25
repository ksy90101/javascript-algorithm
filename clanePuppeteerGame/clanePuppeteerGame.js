function solution(board, moves) {
    let answer = 0;
    const stack = [];
    moves.forEach(move => {
            move--; // 인덱스를 위해 추가
            for (const row in board[move]){
                const value = board[row][move];

                if(value === 0){ // 0은 인형이 없기 때문에 pass(효율성을 위해)
                    continue;
                }

                if(stack.length !== Number(0) && value === stack[stack.length-1]){
                    // 맨 위에 있는 값이 이번값과 같다면 그냥 빼버린다. 넣을 필요도 없다.
                    stack.pop();
                    answer += 2;
                    board[row][move] = 0;
                    break;
                }

                stack.push(value);
                board[row][move] = 0;
                break;
            }
        }
    )
    return answer;
}

const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

console.log(solution(board, moves));
