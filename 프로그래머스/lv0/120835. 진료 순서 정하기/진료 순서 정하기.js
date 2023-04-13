function solution(emergency) {
    var array = new Array(emergency.length);
    var sortArr = emergency.slice().sort((a,b)=>b-a);
    
    var cnt = 1;
    
    for(let i=0; i<emergency.length; i++){
        array[emergency.indexOf(sortArr[i])] = cnt;
        cnt++;
    }
    
    return array;
}