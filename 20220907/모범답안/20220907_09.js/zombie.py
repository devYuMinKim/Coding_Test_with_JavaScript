def solution(A, S):
    zombie = [S]
    member = set()
    member.add(S)
    touch = {}
    retValue = []

    for a in A:
        member.add(a[0])
        member.add(a[1])

        if a[0] in zombie:
            zombie.append(a[1])
        elif a[1] in zombie:
            zombie.append(a[0])
        else:
            if a[0] in touch:
                touch[a[0]] += 1
            else:
                touch[a[0]] = 1
            if a[1] in touch:
                touch[a[1]] += 1
            else:
                touch[a[1]] = 1

    if len(member) == len(zombie):
        return [S]
    else:
        for z in zombie:
            touch[z] = -1

        maxValue = max(touch.values())
        for key  in touch.keys():
            if touch[key] == maxValue:
                retValue.append(key)
        retValue.sort()
        return retValue