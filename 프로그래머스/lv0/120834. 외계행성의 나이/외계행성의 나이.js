function solution(age) {
    var answer = String(age).split('');
    var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var str='';
    
    for(let i=0; i<answer.length; i++){
        str += array[answer[i]];
    }
    
    return str;
}