function solution(num, k) {
    var answer = num.toString().indexOf(k)+1;
    if(answer===0)return -1;
    return answer;
}