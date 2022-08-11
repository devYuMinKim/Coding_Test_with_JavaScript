import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.CountEvenEachNumber.CountEvenEachNumber import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        n = 2875812

        # when
        result = solution(n)

        # then
        self.assertEqual(4, result)

    def test_2(self):
        # given
        n = 1

        # when
        result = solution(n)

        # then
        self.assertEqual(0, result)

    def test_3(self):
        # given
        n = 2

        # when
        result = solution(n)

        # then
        self.assertEqual(1, result)

    def test_4(self):
        # given
        n = 876382

        # when
        result = solution(n)

        # then
        self.assertEqual(4, result)

    def test_5(self):
        # given
        n = 158

        # when
        result = solution(n)

        # then
        self.assertEqual(1, result)

    def test_6(self):
        # given
        n = 96273849

        # when
        result = solution(n)

        # then
        self.assertEqual(4, result)


if __name__ == '__main__':
    unittest.main()
