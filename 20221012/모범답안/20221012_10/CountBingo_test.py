import unittest

from src.com.luckydave.algorithm.fastcampus.hard.CountBingo.CountBingo import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        board = [[True, True, True], [True, True, True], [False, False, True]]

        # when
        result = solution(board)

        # then
        self.assertEqual(3, result)

    def test_2(self):
        # given
        board = [[True, True, True], [True, True, True], [True, True, True]]

        # when
        result = solution(board)

        # then
        self.assertEqual(6, result)

    def test_3(self):
        # given
        board = [[True]]

        # when
        result = solution(board)

        # then
        self.assertEqual(2, result)

    def test_4(self):
        # given
        board = [[False]]

        # when
        result = solution(board)

        # then
        self.assertEqual(0, result)

    def test_5(self):
        # given
        board = [[True, False, True], [False, True, False], [True, False, True]]

        # when
        result = solution(board)

        # then
        self.assertEqual(0, result)

    def test_6(self):
        # given
        board = [[False, True, False], [True, False, True], [False, True, False]]

        # when
        result = solution(board)

        # then
        self.assertEqual(0, result)


if __name__ == '__main__':
    unittest.main()
