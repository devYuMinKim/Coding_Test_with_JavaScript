import unittest

from src.com.luckydave.algorithm.fastcampus.easy.IntersectionTwoArray.IntersectionTwoArray import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr1 = [1, 3, 6, 9, 12]
        arr2 = [2, 4, 6, 8, 10, 12]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([6, 12], result)

    def test_2(self):
        # given
        arr1 = [2, 8, 0, 1]
        arr2 = [9, 7, 0, 4, 8]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([0, 8], result)

    def test_3(self):
        # given
        arr1 = [8, 5, 6, 0, 9]
        arr2 = [4, 1, 3, 5, 2, 8]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([5, 8], result)

    def test_4(self):
        # given
        arr1 = [8, 13, 3, 14, 9, 0, 10, 2]
        arr2 = [18, 14, 20, 13, 0, 19, 4, 6]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([0, 13, 14], result)

    def test_5(self):
        # given
        arr1 = [9, 8, 20, 2, 6]
        arr2 = [10, 11, 9, 4, 2, 19]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([2, 9], result)

    def test_6(self):
        # given
        arr1 = [5, 6, 11, 1, 8, 16, 9, 20, 3, 18, 7, 15]
        arr2 = [13, 16, 8, 5, 10, 4, 14, 0, 1, 15, 9, 17, 19]

        # when
        result = solution(arr1, arr2)

        # then
        self.assertEqual([1, 5, 8, 9, 15, 16], result)


if __name__ == '__main__':
    unittest.main()
