def solution(nums, n):
    """
    :param nums: int[]
    :param n: int
    :return: int
    """

    for i in range(len(nums)):
        if nums[i] == n:
            return i

    return -1
