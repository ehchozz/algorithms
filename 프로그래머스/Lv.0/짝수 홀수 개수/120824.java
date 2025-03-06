class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[2];
        
        for (int num : num_list) {
            if (num % 2 > 0) {
                answer[1]++;
            } else {
                answer[0]++;
            }
        }
        
        return answer;
    }
}
