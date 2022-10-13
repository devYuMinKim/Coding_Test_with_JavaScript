import unittest

from src.com.luckydave.algorithm.fastcampus.medium.MaxBetween.MaxBetween import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = [1, 3, 5, 7, 9]
        a = 3
        b = 7

        # when
        result = solution(arr, a, b)

        # then
        self.assertEqual(7, result)

    def test_2(self):
        # given
        arr = []
        a = 1
        b = 10

        # when
        result = solution(arr, a, b)

        # then
        self.assertEqual(-1, result)

    def test_3(self):
        # given
        arr = [1, 3, 7, 9]
        a = 4
        b = 6

        # when
        result = solution(arr, a, b)

        # then
        self.assertEqual(-1, result)

    def test_4(self):
        # given
        arr = [150]
        a = 100
        b = 200

        # when
        result = solution(arr, a, b)

        # then
        self.assertEqual(150, result)

    def test_5(self):
        # given
        arr = [14, 19, 12, 2, 20, 18, 16, 15, 13]
        a = 5
        b = 15

        # when
        result = solution(arr, a, b)

        # then
        self.assertEqual(15, result)

    def test_6(self):
        # given
        arr = [1, 100000]
        a = 50000
        b = 60000

        # when
        result = solution(arr, a, b)

        # then
        self.assertEqual(-1, result)


if __name__ == '__main__':
    unittest.main()
