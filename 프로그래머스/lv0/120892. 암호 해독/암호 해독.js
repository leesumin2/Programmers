function solution(cipher, code) {
    var answer = [...String(cipher)];
    var arr = [];
    for(let i=code; i<=answer.length; i+=code){
        arr.push(answer[i-1]);
    }
    return arr.join('');
}