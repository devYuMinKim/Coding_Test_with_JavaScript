import unittest

from src.com.luckydave.algorithm.fastcampus.medium.GreatestLetterInBoth.GreatestLetterInBoth import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 'acBfbsTES'

        # when
        result = solution(s)

        # then
        self.assertEqual('S', result)

    def test_2(self):
        # given
        s = 'aA'

        # when
        result = solution(s)

        # then
        self.assertEqual('A', result)

    def test_3(self):
        s = 'aAzZ'

        # when
        result = solution(s)

        # then
        self.assertEqual('Z', result)

    def test_4(self):
        s = 'iSklTpxVxi'

        # when
        result = solution(s)

        # then
        self.assertEqual('', result)

    def test_5(self):
        s = 'vxofFuUNALUWDZUhtgWO'

        # when
        result = solution(s)

        # then
        self.assertEqual('U', result)

    def test_6(self):
        s = 'FfbKycSNMnzjJBQKOmxL'

        # when
        result = solution(s)

        # then
        self.assertEqual('N', result)


if __name__ == '__main__':
    unittest.main()
