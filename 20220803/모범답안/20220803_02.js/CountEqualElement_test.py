import unittest

from src.com.luckydave.algorithm.fastcampus.easy.CountEqualElement.CountEqualElement import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        nums = [2, 5, 6, 3, 2, 6, 6]

        # when
        result = solution(nums)

        # then
        self.assertEqual(4, result)

    def test_2(self):
        # given
        nums = [8, 5, 10, 10, 10, 6, 10, 9, 5, 6]

        # when
        result = solution(nums)

        # then
        self.assertEqual(8, result)

    def test_3(self):
        # given
        nums = [100]

        # when
        result = solution(nums)

        # then
        self.assertEqual(0, result)

    def test_4(self):
        # given
        nums = []

        # when
        result = solution(nums)

        # then
        self.assertEqual(0, result)

    def test_5(self):
        # given
        nums = [100, 100, 100]

        # when
        result = solution(nums)

        # then
        self.assertEqual(3, result)

    def test_6(self):
        # given
        nums = [7, 8, 5, 10, 6, 5, 10, 7, 9, 5]

        # when
        result = solution(nums)

        # then
        self.assertEqual(5, result)


if __name__ == '__main__':
    unittest.main()
