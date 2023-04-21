function solution(n) {
    var answer = 0;
    for(let i=0; i<=10; i++){
        if(fac(i)<=n){
            answer=i;
        };    
    }
    return answer;
}

const fac = (num) => {
    let fNum=1;
    for(let i=1; i<=num; i++){
        fNum *= i;
    }
    return fNum;
}