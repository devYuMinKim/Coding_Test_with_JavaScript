import unittest

from src.com.luckydave.algorithm.fastcampus.medium.CountPrefixOddWordNumber.CountPrefixOddWordNumber import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        array = ['app', 'ap', 'pa', 'appl']
        s = 'apple'

        # when
        result = solution(array, s)

        # then
        self.assertEqual(1, result)

    def test_2(self):
        # given
        array = ['a', 'p', 'app', 'apples']
        s = 'apple'

        # when
        result = solution(array, s)

        # then
        self.assertEqual(2, result)

    def test_3(self):
        # given
        array = []
        s = 'google'

        # when
        result = solution(array, s)

        # then
        self.assertEqual(0, result)

    def test_4(self):
        # given
        array = ['n', 'c', 'cn', 'ncn']
        s = 'nc'

        # when
        result = solution(array, s)

        # then
        self.assertEqual(1, result)

    def test_5(self):
        # given
        array = ['nodejs']
        s = 'nodejs'

        # when
        result = solution(array, s)

        # then
        self.assertEqual(0, result)

    def test_6(self):
        # given
        array = ['javascript']
        s = 'java'

        # when
        result = solution(array, s)

        # then
        self.assertEqual(0, result)


if __name__ == '__main__':
    unittest.main()
