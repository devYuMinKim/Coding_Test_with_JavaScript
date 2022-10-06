import unittest

from src.com.luckydave.algorithm.fastcampus.easy.CountTruncateLetter.CountTruncateLetter import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 'Hello world Nice world'

        # when
        result = solution(s)

        # then
        self.assertEqual(3, result)

    def test_2(self):
        # given
        s = 'Hello world Nice World'

        # when
        result = solution(s)

        # then
        self.assertEqual(4, result)

    def test_3(self):
        # given
        s = 'Apple naver Kakao Naver'

        # when
        result = solution(s)

        # then
        self.assertEqual(4, result)

    def test_4(self):
        # given
        s = 'Where there is a will there is a way'

        # when
        result = solution(s)

        # then
        self.assertEqual(6, result)

    def test_5(self):
        # given
        s = 'The road to success and the road to failure are almost exactly the same'

        # when
        result = solution(s)

        # then
        self.assertEqual(11, result)

    def test_6(self):
        # given
        s = 'It is better to fail in originality than to succeed in imitation'

        # when
        result = solution(s)

        # then
        self.assertEqual(10, result)


if __name__ == '__main__':
    unittest.main()
