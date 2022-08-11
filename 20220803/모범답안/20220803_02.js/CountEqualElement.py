def solution(nums):
    """
    :param nums: int[]
    :return: int
    """

    result = 0

    for i in range(len(nums) - 1):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                result += 1

    return result
