function solution(money) {
    const answer = [0, money];

    while (money >= 5500) {
        money -= 5500;
        answer[0]++;
        answer[1] = money;
    }

    return answer;
}
