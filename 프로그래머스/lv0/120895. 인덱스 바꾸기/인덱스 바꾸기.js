function solution(my_string, num1, num2) {
    var answer = my_string.split('');
    [answer[num1], answer[num2]] = [answer[num2], answer[num1]];
    
    return answer.join('');
}