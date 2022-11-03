import unittest

from src.com.luckydave.algorithm.fastcampus.easy.CandyPrice.CandyPrice import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        n = 11
        price = 10

        # when
        result = solution(n, price)

        # then
        self.assertEqual(100, result)

    def test_2(self):
        # given
        n = 90
        price = 38

        # when
        result = solution(n, price)

        # then
        self.assertEqual(3116, result)

    def test_3(self):
        # given
        n = 98
        price = 65

        # when
        result = solution(n, price)

        # then
        self.assertEqual(5850, result)

    def test_4(self):
        # given
        n = 48
        price = 85

        # when
        result = solution(n, price)

        # then
        self.assertEqual(3740, result)

    def test_5(self):
        # given
        n = 23
        price = 26

        # when
        result = solution(n, price)

        # then
        self.assertEqual(546, result)

    def test_6(self):
        # given
        n = 27
        price = 79

        # when
        result = solution(n, price)

        # then
        self.assertEqual(1975, result)


if __name__ == '__main__':
    unittest.main()
