import unittest

from src.com.luckydave.algorithm.fastcampus.easy.SmallestSameIndex.SmallestSameIndex import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        nums = [1, 3, 5, 3, 2]
        n = 3

        # when
        result = solution(nums, n)

        # then
        self.assertEqual(1, result)

    def test_2(self):
        # given
        usageArr = [2, 4, 2, 4, 2, 4, 4]
        fee = 4

        # when
        result = solution(usageArr, fee)

        # then
        self.assertEqual(1, result)

    def test_3(self):
        # given
        usageArr = [7, 7, 7, 6, 5, 10, 4, 4, 1, 8]
        fee = 6

        # when
        result = solution(usageArr, fee)

        # then
        self.assertEqual(3, result)

    def test_4(self):
        # given
        usageArr = []
        fee = 100

        # when
        result = solution(usageArr, fee)

        # then
        self.assertEqual(-1, result)

    def test_5(self):
        # given
        usageArr = [1, 3, 5, 3, 2]
        fee = 99

        # when
        result = solution(usageArr, fee)

        # then
        self.assertEqual(-1, result)

    def test_6(self):
        # given
        usageArr = [1]
        fee = 1

        # when
        result = solution(usageArr, fee)

        # then
        self.assertEqual(0, result)


if __name__ == '__main__':
    unittest.main()
