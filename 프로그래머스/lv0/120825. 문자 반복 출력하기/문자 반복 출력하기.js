function solution(my_string, n) {
    let answer = my_string.split('');
    let str='';
    for(let i=0; i<answer.length; i++){
        str += answer[i].repeat(n);
    }
    
    return str;
    
}