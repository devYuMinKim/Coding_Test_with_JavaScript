def solution(cards):
    """
    :param cards: int[]
    :return: int
    """

    while len(cards) > 1:
        # 정렬
        cards.sort()
        battle(cards)

    return cards[0] if len(cards) == 1 else 0


def battle(cards):
    life1 = cards.pop()
    life2 = cards.pop()

    leftLife = abs(life1 - life2)

    # 남은 카드 추가
    if leftLife > 0: cards.append(leftLife)
