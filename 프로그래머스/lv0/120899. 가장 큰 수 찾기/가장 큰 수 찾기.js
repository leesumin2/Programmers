function solution(array) {
    var max = Math.max(...array);
    var answer = [max, array.indexOf(max)];
    return answer;
}