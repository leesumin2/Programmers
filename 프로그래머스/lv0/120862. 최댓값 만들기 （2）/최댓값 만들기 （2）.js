function solution(numbers) {
    var answer = numbers.sort((a,b)=>a-b);
    var arr = Math.max(numbers[0]*numbers[1], numbers[numbers.length-1] * numbers[numbers.length-2]);
    return arr;
}