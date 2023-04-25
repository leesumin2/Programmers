function solution(array, n) {
    var answer = array.map(v=> Math.abs(n - v));
    var min = Math.min(...answer);
    var arr = [];
    
    for(var i =0; i<answer.length; i++){
        if(min===answer[i]){
            arr.push(array[i]);
        }
    }
    return Math.min(...arr);
}