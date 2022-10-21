import unittest

from src.com.luckydave.algorithm.fastcampus.medium.PercentageOfLetter.PercentageOfLetter import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        text = 'google'
        s = 'o'

        # when
        result = solution(text, s)

        # then
        self.assertEqual(33, result)

    def test_2(self):
        # given
        text = 'naver'
        s = 'o'

        # when
        result = solution(text, s)

        # then
        self.assertEqual(0, result)

    def test_3(self):
        # given
        text = 'a'
        s = 'a'

        # when
        result = solution(text, s)

        # then
        self.assertEqual(100, result)

    def test_4(self):
        # given
        text = 'nrttxlpujq'
        s = 'd'

        # when
        result = solution(text, s)

        # then
        self.assertEqual(0, result)

    def test_5(self):
        # given
        text = 'bnwbjmyzagosnvljorpi'
        s = 'a'

        # when
        result = solution(text, s)

        # then
        self.assertEqual(5, result)

    def test_6(self):
        # given
        text = 'okvyyvahyhtdyffoaeezoyvmczeekftvjlfuwoybxstmjkqvykoflvoknhmxjfjdphgkspczaearxiojdisadurghlbtfzlbqcds'
        s = 'v'

        # when
        result = solution(text, s)

        # then
        self.assertEqual(6, result)


if __name__ == '__main__':
    unittest.main()
