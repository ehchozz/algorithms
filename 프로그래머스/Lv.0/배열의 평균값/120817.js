function solution(numbers) {
    let answer = 0;

    let sum = 0;
    numbers.forEach(number => sum += number);

    answer = sum / numbers.length;

    return answer;
}
