function solution(array) {
    return String(array.join('')).split('').filter(item=>item==='7').length;
}