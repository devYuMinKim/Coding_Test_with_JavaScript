import unittest

from src.com.luckydave.algorithm.fastcampus.hard.ControlBallNumber.ControlBallNumber import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        array = [1, 3, 4]

        # when
        result = solution(array)

        # then
        self.assertEqual(['In', 'In', 'Out', 'In', 'In', 'End'], result)

    def test_2(self):
        # given
        array = [1]

        # when
        result = solution(array)

        # then
        self.assertEqual(['In', 'End'], result)

    def test_3(self):
        # given
        array = [2]

        # when
        result = solution(array)

        # then
        self.assertEqual(['In', 'Out', 'In', 'End'], result)

    def test_4(self):
        # given
        array = []

        # when
        result = solution(array)

        # then
        self.assertEqual(['End'], result)

    def test_5(self):
        # given
        array = [2, 4]

        # when
        result = solution(array)

        # then
        self.assertEqual(['In', 'Out', 'In', 'In', 'Out', 'In', 'End'], result)

    def test_6(self):
        # given
        array = [5]

        # when
        result = solution(array)

        # then
        self.assertEqual(['In', 'Out', 'In', 'Out', 'In', 'Out', 'In', 'Out', 'In' ,'End'], result)


if __name__ == '__main__':
    unittest.main()
