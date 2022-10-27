def solution(A, B):
    nameDict = {}
    categoryDict = {}
    recommend = set()

    for a in A:
        if a[0] in categoryDict:
            categoryDict[a[0]].append(a[1])
        else:
            categoryDict[a[0]] = [a[1]]

        if a[1] in nameDict:
            nameDict[a[1]].append(a[0])
        else:
            nameDict[a[1]] = [a[0]]

    for b in B:
        for category in nameDict[b]:
            recommend = recommend.union(set(categoryDict[category]))

    return len(recommend)