/**
 * @param {string} message
 * @return {int}
 */
function solution(message) {
    const dp = [1]; dp[-1] = 1;
    
    for (let i = 1; i < message.length; i++) {
        dp[i] = dp[i-1];
        if (message[i] == message[i-1] && (message[i] == 'u' || message[i] == 'n')) { 
            dp[i] = dp[i] + dp[i-2];
        }
    }
 
    return dp[message.length-1];
}
