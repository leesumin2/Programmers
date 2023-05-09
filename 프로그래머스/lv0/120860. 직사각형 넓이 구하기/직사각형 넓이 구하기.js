function solution(dots) {
    
    const x = dots.map(x => x[0]);
    const y = dots.map(y => y[1]);
    
    return Math.abs(Math.max(...x)-Math.min(...x)) * Math.abs(Math.max(...y)-Math.min(...y));
}