def solution(rewards, k):
    '''
    :param rewards: list
    :param k: int
    :return: list
    '''
    student = [0] * k
    result = float('inf')

    def recurse(i, student):
        if i == len(rewards):
            nonlocal result
            result = min(result, max(student))
            return

        reward_size = rewards[i]
        for s in range(min(i + 1, k)):
            student[s] += reward_size
            recurse(i + 1, student)
            student[s] -= reward_size

    recurse(0, student)

    return result
