function solution(s) {
    var arr = s.split('');
    var answer=[];
    for(var i of arr){
        if(arr.indexOf(i)===arr.lastIndexOf(i))answer.push(i);
    }
    return answer.sort().join('');
}