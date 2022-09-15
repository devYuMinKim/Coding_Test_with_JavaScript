class FriendShip():
    def __init__(self):
        self.friendMap = dict()
        self.fff = 0

    def setFriendShip(self, friend):
        try:
            self.friendMap[friend[0]].add(friend[1])
        except KeyError:
            self.friendMap[friend[0]] = set([friend[1]])

        if friend[1] not in self.friendMap or friend[0] not in self.friendMap[friend[1]]:
            return
        else:
            self.fff += 1
        return


def solution(friends):
    fs = FriendShip()

    for friend in friends:
        fs.setFriendShip(friend)

    return fs.fff