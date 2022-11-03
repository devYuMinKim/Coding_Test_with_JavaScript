import unittest

from src.com.luckydave.algorithm.fastcampus.easy.MatrixFullWith.MatrixFullWith import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        matrix = [[True, True, True, True], [True, True, False, True], [True, False, True, True], [True, True, True, True]]
        b = True

        # when
        result = solution(matrix, b)

        # then
        self.assertEqual(False, result)

    def test_2(self):
        # given
        matrix = [[True, True], [True, True]]
        b = True

        # when
        result = solution(matrix, b)

        # then
        self.assertEqual(True, result)

    def test_3(self):
        # given
        matrix = [[True]]
        b = False

        # when
        result = solution(matrix, b)

        # then
        self.assertEqual(False, result)

    def test_4(self):
        # given
        matrix = [[False]]
        b = True

        # when
        result = solution(matrix, b)

        # then
        self.assertEqual(False, result)

    def test_5(self):
        # given
        matrix = [[True, True], [True, True]]
        b = False

        # when
        result = solution(matrix, b)

        # then
        self.assertEqual(False, result)

    def test_6(self):
        # given
        matrix = [[False, True, False], [True, False, True], [False, True, False]]
        b = True

        # when
        result = solution(matrix, b)

        # then
        self.assertEqual(False, result)


if __name__ == '__main__':
    unittest.main()
