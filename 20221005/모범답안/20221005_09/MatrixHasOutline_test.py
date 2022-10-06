import unittest

from src.com.luckydave.algorithm.fastcampus.medium.MatrixHasOutline.MatrixHasOutline import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        matrix = [[True, True, True, True], [True, True, False, True], [True, False, True, True], [True, True, True, True]]

        # when
        result = solution(matrix)

        # then
        self.assertEqual(True, result)

    def test_2(self):
        # given
        matrix = [[True, True], [True, True]]

        # when
        result = solution(matrix)

        # then
        self.assertEqual(True, result)

    def test_3(self):
        # given
        matrix = [[True]]

        # when
        result = solution(matrix)

        # then
        self.assertEqual(True, result)

    def test_4(self):
        # given
        matrix = [[True, False], [True, True]]

        # when
        result = solution(matrix)

        # then
        self.assertEqual(False, result)

    def test_5(self):
        # given
        matrix = [[False]]

        # when
        result = solution(matrix)

        # then
        self.assertEqual(False, result)

    def test_6(self):
        # given
        matrix = [[False, True, False], [True, False, True], [False, True, False]]

        # when
        result = solution(matrix)

        # then
        self.assertEqual(False, result)


if __name__ == '__main__':
    unittest.main()
