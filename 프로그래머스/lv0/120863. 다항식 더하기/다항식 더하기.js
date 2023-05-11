function solution(polynomial) {
    var numSplit = polynomial.split(' + ');
    var xNum=0;
    var num=0;
    numSplit.forEach(item=>{
        if(item.includes('x')){
            var xArr = item.split('x');
            xArr[0]==='' ? xNum += 1 : xNum += Number(xArr[0]);
        }else if(!item.includes("x")){
            num+=Number(item);
        }
    })
    if(xNum!==0 && num!==0) return xNum===1 ? "x + " + num : xNum + "x + " + num;
    else if(xNum!==0 && num===0) return xNum===1 ? "x" : xNum + 'x';
    else if(xNum===0 && num!==0) return num.toString();
    else if(xNum===0 && num===0)return 0;
}