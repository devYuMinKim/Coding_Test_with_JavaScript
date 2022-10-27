class Checker:
    def __init__(self, arr) -> None:
        self.arr = arr
        self.sum_arr = sum(arr)
        self.sorted_arr = sorted(arr)
        self.diff = [self.sorted_arr[i] - self.sorted_arr[i - 1] for i in range(1, 5)]
        
        self.counts = [arr.count(i) for i in range(1, 7)]
        self.sorted_counts = sorted(self.counts)

    def checkYacht(self):
        if self.counts.count(5) != 0:
            return 50
        return 0

    def check4Kind(self):
        if self.sorted_counts[-1] >= 4:
            return self.sum_arr
        return 0

    def checkFullHouse(self):
        if self.sorted_arr[0] == self.sorted_arr[1] and self.sorted_arr[2] == self.sorted_arr[4]:
            return self.sum_arr
        elif self.sorted_arr[0] == self.sorted_arr[2] and self.sorted_arr[3] == self.sorted_arr[4]:
            return self.sum_arr
        else:
            return 0

    def checkLStraight(self):
        if self.diff.count(1) == 4:
            return 30
        return 0

    def checkSStraight(self):
        if self.diff[:3].count(1) == 3:
            return 15
        elif self.diff[1:].count(1) == 3:
            return 15
        return 0
    
    def checkOthers(self):
        score = 0
        for i in range(1, 7):
            score = max(score, i * self.counts[i - 1])
        
        return score
    
    def getMaxScore(self):
        return max(
            [
                self.checkYacht(),
                self.check4Kind(),
                self.checkFullHouse(),
                self.checkLStraight(),
                self.checkSStraight(),
                self.checkOthers()
            ]
        )

def solution(arr):
    '''
    :param arr: int[]
    :return: int
    '''

    checker = Checker(arr)
    return checker.getMaxScore()
