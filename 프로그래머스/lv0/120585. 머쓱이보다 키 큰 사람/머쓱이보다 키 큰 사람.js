function solution(array, height) {
    var answer = array.filter(h=> h>height).length;
    return answer;
}