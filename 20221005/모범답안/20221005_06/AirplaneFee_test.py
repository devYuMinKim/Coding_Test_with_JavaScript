import unittest

from src.com.luckydave.algorithm.fastcampus.medium.AirplaneFee.AirplaneFee import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = [3, 1, 5]
        fee = 10

        # when
        result = solution(arr, fee)

        # then
        self.assertEqual(80, result)

    def test_2(self):
        # given
        arr = [37, 89]
        fee = 91

        # when
        result = solution(arr, fee)

        # then
        self.assertEqual(9282, result)

    def test_3(self):
        # given
        arr = [92, 60, 99]
        fee = 3

        # when
        result = solution(arr, fee)

        # then
        self.assertEqual(606, result)

    def test_4(self):
        # given
        arr = [35, 66, 51, 31]
        fee = 26

        # when
        result = solution(arr, fee)

        # then
        self.assertEqual(3822, result)

    def test_5(self):
        # given
        arr = [95, 23, 1, 10, 48]
        fee = 5

        # when
        result = solution(arr, fee)

        # then
        self.assertEqual(715, result)

    def test_6(self):
        # given
        arr = [29, 47, 85, 33, 56, 15]
        fee = 8

        # when
        result = solution(arr, fee)

        # then
        self.assertEqual(1712, result)


if __name__ == '__main__':
    unittest.main()
