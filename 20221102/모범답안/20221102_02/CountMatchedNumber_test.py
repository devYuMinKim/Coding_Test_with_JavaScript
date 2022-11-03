import unittest

from src.com.luckydave.algorithm.fastcampus.easy.CountMatchedNumber.CountMatchedNumber import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = '134246'
        n = 4

        # when
        result = solution(s, n)

        # then
        self.assertEqual(2, result)

    def test_2(self):
        # given
        s = '4882305038'
        n = 8

        # when
        result = solution(s, n)

        # then
        self.assertEqual(3, result)

    def test_3(self):
        # given
        s = '0'
        n = 0

        # when
        result = solution(s, n)

        # then
        self.assertEqual(1, result)

    def test_4(self):
        # given
        s = '0'
        n = 1

        # when
        result = solution(s, n)

        # then
        self.assertEqual(0, result)

    def test_5(self):
        # given
        s = '44435013785452732466'
        n = 4

        # when
        result = solution(s, n)

        # then
        self.assertEqual(5, result)

    def test_6(self):
        # given
        s = '30812522681139093477'
        n = 7

        # when
        result = solution(s, n)

        # then
        self.assertEqual(2, result)


if __name__ == '__main__':
    unittest.main()
