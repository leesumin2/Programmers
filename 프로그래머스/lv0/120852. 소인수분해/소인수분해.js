function solution(n) {
    let array = [];
    for(let i=2; i<=n; i++){
        while(n%i==0){
            array.push(i);
            if(n===1) break; 
            n /= i;
        }
    }
    return array.filter((a,b)=> array.indexOf(a)===b);
}