function solution(rsp) {
    var answer = rsp.split('');
    let str=''
    for(i of answer){
        if(i==='2'){
            str+='0';
        }else if(i==='0'){
            str+='5';
        }else{
            str+='2'
        }
    }
    return str;
}