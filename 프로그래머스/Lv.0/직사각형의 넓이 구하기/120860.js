function solution(dots) {
    let answer = 0;
    
    let minX = dots[0][0], minY = dots[0][1], maxX = dots[0][0], maxY = dots[0][1];
    for (let i=1; i<dots.length; i++) {
        minX = Math.min(dots[i][0], minX);
        minY = Math.min(dots[i][1], minY);
        maxX = Math.max(dots[i][0], maxX);
        maxY = Math.max(dots[i][1], maxY);
    }
    
    answer = (maxX - minX) * (maxY - minY);
    
    return answer;
}
