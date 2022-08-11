import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.StringToAscii.StringToAscii import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 'work'

        # when
        result = solution(s)

        # then
        self.assertEqual([119, 111, 114, 107], result)

    def test_2(self):
        # given
        s = 'Google'

        # when
        result = solution(s)

        # then
        self.assertEqual([71, 111, 111, 103, 108, 101], result)

    def test_3(self):
        # given
        s = 'AlGoRitHm'

        # when
        result = solution(s)

        # then
        self.assertEqual([65, 108, 71, 111, 82, 105, 116, 72, 109], result)

    def test_4(self):
        # given
        s = ''

        # when
        result = solution(s)

        # then
        self.assertEqual([], result)

    def test_5(self):
        # given
        s = 'A'

        # when
        result = solution(s)

        # then
        self.assertEqual([65], result)

    def test_6(self):
        # given
        s = 'z'

        # when
        result = solution(s)

        # then
        self.assertEqual([122], result)


if __name__ == '__main__':
    unittest.main()
