function solution(my_string) {
    var answer = my_string.split(' ');
    var num = Number(answer[0]);
    for(let i=0; i<answer.length; i++){
        if(answer[i]==='+'){
            num += Number(answer[i+1]);
        }else if(answer[i]==='-'){
            num -= Number(answer[i+1]);
        }
    }
    return num;
}