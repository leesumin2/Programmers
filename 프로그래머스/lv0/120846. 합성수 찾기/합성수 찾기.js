function solution(n) {
    let cnt = 0;
    let compo = 0;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            if(i%j===0){
                compo+=1;
                if(compo>=3){
                    cnt+=1;
                    break;
                }
            }
        } compo=0;  
        
    }
    return cnt;
}