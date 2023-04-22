function solution(my_string) {
    var answer = my_string.split('').filter((num)=>isNaN(num)===false);
    answer = answer.map(num => Number(num)).reduce((acc,cur)=>acc+cur);
    return answer;
}