function solution(price) {
    let answer = price;

    if (price >= 500000) {
        answer *= 0.8;

    } else if (price >= 300000) {
        answer *= 0.9;

    } else if (price >= 100000) {
        answer *= 0.95;
    }

    return parseInt(answer);
}
