function solution(my_string) {
    var answer = my_string.split('').filter((a,b)=> my_string.indexOf(a) === b).join('');
    return answer;
}