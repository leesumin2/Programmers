function solution(my_string) {
    var answer = my_string.split('');
    var arr = [];
    for(i of answer){
        if(isNaN(i)===false){
            arr.push(Number(i));
        }
    }
    return arr.sort((a,b)=>a-b);
}