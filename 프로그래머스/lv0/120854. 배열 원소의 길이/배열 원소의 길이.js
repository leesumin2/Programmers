function solution(strlist) {
    var answer = [];
    var cnt=0;
    for(let i=0; i<strlist.length; i++){
        answer.push(strlist[i].length);
    }
    return answer;
}