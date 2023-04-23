function solution(s) {
    var answer = s.split(' ').map((v)=>Number(v));
    console.log(answer);
    var num=0;
    for(let i=0; i<answer.length; i++)
        if(isNaN(answer[i])===true){
            num-=answer[i-1];
        }
        else{
            num+= answer[i];
        }
    return num;
}