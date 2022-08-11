def solution(sentence, word):
    """
    :param sentence: string
    :param word: string
    :return: int
    """

    if word == '':
        return -1

    words = sentence.split(' ')

    for i, eachWord in enumerate(words):
        print(word)
        if eachWord == word:
            return i

    return -1
