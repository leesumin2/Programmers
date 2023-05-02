function solution(n) {
    var answer = String(n).split('');
    var sum=0;
    answer.forEach(v=> sum+=Number(v));
    return sum;
}