def solution(nums):
    """
    :param nums: int[]
    :return: int[]
    """

    students = list(range(1, len(nums) + 1))

    return list(filter(lambda num: num not in nums, students))
