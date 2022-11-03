import unittest

from src.com.luckydave.algorithm.fastcampus.easy.JoinToString.JoinToString import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = [1, 3, 0, 7, 9]
        prefix = "<"
        separator = ", "
        postfix = ">"

        # when
        result = solution(arr, prefix, separator, postfix)

        # then
        self.assertEqual("<1, 3, 0, 7, 9>", result)

    def test_2(self):
        # given
        arr = [1]
        prefix = "<"
        separator = ", "
        postfix = ">"

        # when
        result = solution(arr, prefix, separator, postfix)

        # then
        self.assertEqual("<1>", result)

    def test_3(self):
        # given
        arr = [1, 3, 0, 7, 9]
        prefix = ">"
        separator = ", "
        postfix = "<"

        # when
        result = solution(arr, prefix, separator, postfix)

        # then
        self.assertEqual(">1, 3, 0, 7, 9<", result)

    def test_4(self):
        # given
        arr = [12, 6, 6, 1, 1]
        prefix = "("
        separator = ", "
        postfix = ")"

        # when
        result = solution(arr, prefix, separator, postfix)

        # then
        self.assertEqual("(12, 6, 6, 1, 1)", result)

    def test_5(self):
        # given
        arr = [19, 0, 13, 16, 1]
        prefix = "["
        separator = ";"
        postfix = "]"

        # when
        result = solution(arr, prefix, separator, postfix)

        # then
        self.assertEqual("[19;0;13;16;1]", result)

    def test_6(self):
        # given
        arr = [3, 18, 17, 6, 9]
        prefix = ""
        separator = ""
        postfix = ""

        # when
        result = solution(arr, prefix, separator, postfix)

        # then
        self.assertEqual("3181769", result)


if __name__ == '__main__':
    unittest.main()
