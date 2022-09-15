def search(edible, caneat, eater, chosen, best):
    if best <= chosen :
        return best
    first = 0
    while first < len(edible) and 0 < edible[first]:
        first += 1
    if first == len(edible):
        best = min(best,chosen)
        return best;
    for i in caneat[first]:
        food=i
        for j in eater[food]:
            edible[j]+=1
        best =  search(edible, caneat, eater, chosen+1, best)
        for j in eater[food]:
            edible[j]-=1

    return best

def solution(Friends, Taste):
    best = len(Taste)
    caneat=[[] for i in range(len(Friends))]
    edible = [0 for i in range(len(Friends))]
    eater=[[] for i in range(len(Taste))]

    dict = {f:Friends.index(f) for f in Friends}

    for i in range(len(Taste)):
        for j in range(len(Taste[i])):
            caneat[dict[Taste[i][j]]].append(i)
            eater[i].append(dict[Taste[i][j]])


    return search(edible, caneat, eater, 0, best)
