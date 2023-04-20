function solution(numbers, direction) {
    var answer = numbers;
    var len = numbers.length;
    if(direction==='right'){
        answer.unshift(numbers[len-1]);
        answer.pop(numbers[len-1]);
    }else{
        answer.push(numbers[0]);
        answer.shift(numbers[0]);
    }
    
    return answer;
}