function solution(numbers) {
    var answer = '';
    for(var i=0; i<num.length; i++){
        numbers = numbers.split(num[i]).join(i);
    }
    
    return Number(numbers);
}

const num=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];