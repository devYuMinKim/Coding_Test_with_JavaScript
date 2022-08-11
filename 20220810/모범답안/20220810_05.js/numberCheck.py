def countDigit(number, d, K):
    power = 10 ** d
    nextPower = power * 10
    right = number % power

    down = number - number % nextPower
    up = down + nextPower

    digit = (number / power) % 10
    if digit < K:
        return down / 10
    elif digit == K:
        return down / 10 + right + 1
    else:
        return up / 10


def solution(N, K):
    count = 0

    for i in range(len(str(N))):
        count += countDigit (N, i, K)
    return count
