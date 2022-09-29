import unittest

from src.com.luckydave.algorithm.fastcampus.hard.CheckColorCode.CheckColorCode import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 'DACC32'

        # when
        result = solution(s)

        # then
        self.assertEqual(True, result)

    def test_2(self):
        # given
        s = 'AAAAAA'

        # when
        result = solution(s)

        # then
        self.assertEqual(True, result)

    def test_3(self):
        # given
        s = '000000'

        # when
        result = solution(s)

        # then
        self.assertEqual(True, result)

    def test_4(self):
        # given
        s = 'A0B2C4'

        # when
        result = solution(s)

        # then
        self.assertEqual(True, result)

    def test_5(self):
        # given
        s = 'ABAB'

        # when
        result = solution(s)

        # then
        self.assertEqual(False, result)

    def test_6(self):
        # given
        s = '01234567'

        # when
        result = solution(s)

        # then
        self.assertEqual(False, result)


if __name__ == '__main__':
    unittest.main()
