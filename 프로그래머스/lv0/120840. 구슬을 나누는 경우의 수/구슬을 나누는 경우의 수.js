function solution(balls, share) {
    var answer = fac(balls)/(fac(balls-share) * fac(share));
    return Math.round(answer);
}

function fac(num){
    let res=1;
    for(let i=1; i<=num; i++){
        res *=i;
    }
    return res;
}
