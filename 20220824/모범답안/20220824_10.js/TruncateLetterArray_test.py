import unittest

from src.com.luckydave.algorithm.fastcampus.hard.TruncateLetterArray.TruncateLetterArray import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = ['We can', 'give advice', 'but we cannot give conduct']

        # when
        result = solution(arr)

        # then
        self.assertEqual(['We', 'advice', 'but', 'can', 'cannot', 'conduct', 'give', 'we'], result)

    def test_2(self):
        # given
        arr = ['Hello', 'world', 'Nice World']

        # when
        result = solution(arr)

        # then
        self.assertEqual(['Hello', 'Nice', 'World', 'world'], result)

    def test_3(self):
        # given
        arr = ['Hi', 'My Name', 'Is dave']

        # when
        result = solution(arr)

        # then
        self.assertEqual(['Hi', 'Is', 'My', 'Name', 'dave'], result)

    def test_4(self):
        # given
        arr = ['Better late', 'than never']

        # when
        result = solution(arr)

        # then
        self.assertEqual(['Better', 'late', 'never', 'than'], result)

    def test_5(self):
        # given
        arr = ['Slow', 'and', 'steady', 'win the race']

        # when
        result = solution(arr)

        # then
        self.assertEqual(['Slow', 'and', 'race', 'steady', 'the', 'win'], result)

    def test_6(self):
        # given
        arr = ['Rome is', 'not built', 'in a day']

        # when
        result = solution(arr)

        # then
        self.assertEqual(['Rome', 'a', 'built', 'day', 'in', 'is', 'not'], result)


if __name__ == '__main__':
    unittest.main()
