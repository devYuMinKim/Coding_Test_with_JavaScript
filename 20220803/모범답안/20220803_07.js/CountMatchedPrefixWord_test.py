import unittest

from src.com.luckydave.algorithm.fastcampus.medium.CountMatchedPrefixWord.CountMatchedPrefixWord import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        array = ['apple', 'banana', 'kakao', 'naver', 'apache']
        p = 'a'

        # when
        result = solution(array, p)

        # then
        self.assertEqual(2, result)

    def test_2(self):
        # given
        array = ['asjefkl', 'aeklfj', 'asifljl', 'ruihgjd', 'djgkln']
        p = 'as'

        # when
        result = solution(array, p)

        # then
        self.assertEqual(2, result)

    def test_3(self):
        # given
        array = ['cloff', 'vxqql', 'tkafv', 'ophik', 'lscmj']
        p = 't'

        # when
        result = solution(array, p)

        # then
        self.assertEqual(1, result)

    def test_4(self):
        # given
        array = []
        p = 'naver'

        # when
        result = solution(array, p)

        # then
        self.assertEqual(0, result)

    def test_5(self):
        # given
        array = ['uehex', 'gevhl', 'bhitm', 'csoqm', 'xsqcf']
        p = 'naver'

        # when
        result = solution(array, p)

        # then
        self.assertEqual(0, result)

    def test_6(self):
        # given
        array = ['mmzuf', 'sfnki', 'qdpov', 'zpdtg', 'prozo']
        p = ''

        # when
        result = solution(array, p)

        # then
        self.assertEqual(5, result)


if __name__ == '__main__':
    unittest.main()
