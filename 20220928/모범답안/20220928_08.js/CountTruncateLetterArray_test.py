import unittest

from src.com.luckydave.algorithm.fastcampus.medium.CountTruncateLetterArray.CountTruncateLetterArray import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = ['no pain', 'no', 'gain']

        # when
        result = solution(arr)

        # then
        self.assertEqual(3, result)

    def test_2(self):
        # given
        arr = ['Hello', 'world', 'Nice World']

        # when
        result = solution(arr)

        # then
        self.assertEqual(4, result)

    def test_3(self):
        # given
        arr = ['We can give advice but we cannot give conduct']

        # when
        result = solution(arr)

        # then
        self.assertEqual(8, result)

    def test_4(self):
        # given
        arr = ['Better late', 'than never']

        # when
        result = solution(arr)

        # then
        self.assertEqual(4, result)

    def test_5(self):
        # given
        arr = ['Slow', 'and', 'steady', 'win the race']

        # when
        result = solution(arr)

        # then
        self.assertEqual(6, result)

    def test_6(self):
        # given
        arr = ['Rome is', 'not built', 'in a day']

        # when
        result = solution(arr)

        # then
        self.assertEqual(7, result)


if __name__ == '__main__':
    unittest.main()
