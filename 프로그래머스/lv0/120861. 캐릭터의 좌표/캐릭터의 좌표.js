function solution(keyinput, board) {
    var answer = [0,0];
    var point = [Math.floor(board[0]/2),Math.floor(board[1]/2)];
    keyinput.forEach(key=>{
        switch(key) {
            case 'left' : 
                answer[0] -= 1; break;
            case 'right' : 
                answer[0] += 1; break;
            case 'up' : 
                answer[1] += 1; break;
            case 'down' : 
                answer[1] -= 1; break;
        }
        if(answer[0] < 0 && Math.abs(answer[0])>point[0]){
            answer[0] = point[0] * -1;
        }else if(answer[0] > 0 && Math.abs(answer[0])>point[0]){
            answer[0] = point[0] * 1;
        }
        if(answer[1] < 0 && Math.abs(answer[1])>point[1]){
            answer[1] = point[1] * -1;
        }else if(answer[1] > 0 && Math.abs(answer[1])>point[1]){
            answer[1] = point[1] * 1;
        }

    })
    return answer;
}