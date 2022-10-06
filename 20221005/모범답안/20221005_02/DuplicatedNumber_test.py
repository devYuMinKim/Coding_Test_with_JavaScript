import unittest

from src.com.luckydave.algorithm.fastcampus.easy.DuplicatedNumber.DuplicatedNumber import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr1 = [1, 7, 8, 4]
        arr2 = [2, 4, 6, 8]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([4, 8], result)

    def test_2(self):
        # given
        arr1 = [6, 3, 2, 7, 5]
        arr2 = [2, 7, 5, 10, 4]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([2, 5, 7], result)

    def test_3(self):
        # given
        arr1 = [1]
        arr2 = [10]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([], result)

    def test_4(self):
        # given
        arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result)

    def test_5(self):
        # given
        arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        arr2 = [10]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([], result)

    def test_6(self):
        # given
        arr1 = [20, 20, 14, 10, 6]
        arr2 = [7, 4, 9, 9, 2]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([], result)


if __name__ == '__main__':
    unittest.main()
