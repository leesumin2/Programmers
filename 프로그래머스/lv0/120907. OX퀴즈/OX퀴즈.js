function solution(quiz) {
    var answer = [];
    let cal = 0;
    for(let i=0; i<quiz.length; i++){
        let [left, op1, right, op2, res] = quiz[i].split(' ');
        op1==='+' ? cal = (Number(left) + Number(right)) : cal = (Number(left) - Number(right));
        cal === Number(res) ? answer.push('O') : answer.push('X');
    }
    return answer;
}