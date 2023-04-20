function solution(num_list, n) {
    var answer = [];
    for(let i=0; i<num_list.length; ){
        array = [];
        for(let j=0; j<n; j++){
            array.push(num_list[i]);
            i++;
        }   
        answer.push(array);
    }
    return answer;
}