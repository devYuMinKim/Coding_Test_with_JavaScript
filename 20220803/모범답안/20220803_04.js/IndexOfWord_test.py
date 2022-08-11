import unittest

from src.com.luckydave.algorithm.fastcampus.easy.IndexOfWord.IndexOfWord import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        sentence = 'Hello every world'
        word = 'every'

        # when
        result = solution(sentence, word)

        # then
        self.assertEqual(1, result)

    def test_2(self):
        # given
        sentence = 'i love eating burger'
        word = 'i'

        # when
        result = solution(sentence, word)

        # then
        self.assertEqual(0, result)

    def test_3(self):
        # given
        sentence = 'My name is Dave'
        word = 'Dave'

        # when
        result = solution(sentence, word)

        # then
        self.assertEqual(3, result)

    def test_4(self):
        # given
        sentence = 'Ut congue ante nec libero malesuada accumsan'
        word = 'acc'

        # when
        result = solution(sentence, word)

        # then
        self.assertEqual(-1, result)

    def test_5(self):
        # given
        sentence = ''
        word = 'every'

        # when
        result = solution(sentence, word)

        # then
        self.assertEqual(-1, result)

    def test_6(self):
        # given
        sentence = ''
        word = ''

        # when
        result = solution(sentence, word)

        # then
        self.assertEqual(-1, result)


if __name__ == '__main__':
    unittest.main()
