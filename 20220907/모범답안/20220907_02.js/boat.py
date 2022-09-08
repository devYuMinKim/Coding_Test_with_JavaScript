def solution(People, Limit):
    People.sort()
    answer = 0

    while len(People) != 0:
        temp = People.pop()
        for i in range(len(People)-1, -1, -1):
            if Limit >= temp + People[i]:
                People.remove(People[i])
                break;
        answer += 1

    return answer
