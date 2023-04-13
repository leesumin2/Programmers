function solution(emergency) {
    let sortedArray = emergency.slice().sort((a,b)=> b-a);
    return emergency.map(num=>sortedArray.indexOf(num)+1);
   
}