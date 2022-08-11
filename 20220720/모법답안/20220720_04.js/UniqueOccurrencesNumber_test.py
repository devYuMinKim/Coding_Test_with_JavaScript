import unittest

from src.com.luckydave.algorithm.fastcampus.easy.UniqueOccurrencesNumber.UniqueOccurrencesNumber import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = [1, 3, 5, 4, 3, 1, 1]

        # when
        result = solution(arr)

        # then
        self.assertEqual(False, result)

    def test_2(self):
        # given
        arr = [6, 18, 12, 3, 1, 12]

        # when
        result = solution(arr)

        # then
        self.assertEqual(False, result)

    def test_3(self):
        # given
        arr = [5, 18, 2, 1, 7, 13]

        # when
        result = solution(arr)

        # then
        self.assertEqual(False, result)

    def test_4(self):
        # given
        arr = [5, 1, 1, 6, 4, 6, 4, 4, 1, 1]

        # when
        result = solution(arr)

        # then
        self.assertEqual(True, result)

    def test_5(self):
        # given
        arr = [1]

        # when
        result = solution(arr)

        # then
        self.assertEqual(True, result)

    def test_6(self):
        # given
        arr = [10, 9, 9, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6]

        # when
        result = solution(arr)

        # then
        self.assertEqual(True, result)


if __name__ == '__main__':
    unittest.main()
