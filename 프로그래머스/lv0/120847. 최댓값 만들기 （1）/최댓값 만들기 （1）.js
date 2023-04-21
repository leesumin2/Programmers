function solution(numbers) {
    var sorted = numbers.sort((a,b)=> b-a);
    return sorted[0] * sorted[1];
}