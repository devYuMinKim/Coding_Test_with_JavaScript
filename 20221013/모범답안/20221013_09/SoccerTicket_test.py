import unittest

from src.com.luckydave.algorithm.fastcampus.medium.SoccerTicket.SoccerTicket import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = [3, 2, 1, 5]
        t = 1

        # when
        result = solution(arr, t)

        # then
        self.assertEqual(15, result)

    def test_2(self):
        # given
        arr = [34]
        t = 1

        # when
        result = solution(arr, t)

        # then
        self.assertEqual(35, result)

    def test_3(self):
        # given
        arr = [40, 60, 58, 71]
        t = 2

        # when
        result = solution(arr, t)

        # then
        self.assertEqual(466, result)

    def test_4(self):
        # given
        arr = [37, 45, 3, 99, 29]
        t = 3

        # when
        result = solution(arr, t)

        # then
        self.assertEqual(654, result)

    def test_5(self):
        # given
        arr = [82, 69, 70, 60, 49, 85]
        t = 4

        # when
        result = solution(arr, t)

        # then
        self.assertEqual(1684, result)

    def test_6(self):
        # given
        arr = [79, 15]
        t = 5

        # when
        result = solution(arr, t)

        # then
        self.assertEqual(480, result)


if __name__ == '__main__':
    unittest.main()
