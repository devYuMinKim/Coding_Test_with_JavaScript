import unittest

from src.com.luckydave.algorithm.fastcampus.hard.CombineTwoDigitEvenNumber.CombineTwoDigitEvenNumber import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        array = [1, 3, 4]

        # when
        result = solution(array)

        # then
        self.assertEqual(4, result)

    def test_2(self):
        # given
        array = [1, 4, 6, 8]

        # when
        result = solution(array)

        # then
        self.assertEqual(3, result)

    def test_3(self):
        # given
        array = [4, 2, 6, 8, 4, 2]

        # when
        result = solution(array)

        # then
        self.assertEqual(0, result)

    def test_4(self):
        # given
        array = []

        # when
        result = solution(array)

        # then
        self.assertEqual(0, result)

    def test_5(self):
        # given
        array = [5]

        # when
        result = solution(array)

        # then
        self.assertEqual(0, result)

    def test_6(self):
        # given
        array = [5, 5]

        # when
        result = solution(array)

        # then
        self.assertEqual(1, result)


if __name__ == '__main__':
    unittest.main()
