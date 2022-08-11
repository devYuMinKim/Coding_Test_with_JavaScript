def solution(maps):
    '''
    :param maps: list
    :return: int
    '''
    MOD = 998_244_353
    INF = 1_000_000_000
    n = len(maps)
    fact = [1]

    for i in range(1, n+1):
        fact.append((fact[-1] * i) % MOD)

    def comb(i, j):
        return (fact[i] * pow((fact[i-j]*fact[j]), MOD-2, MOD))%MOD

    def perm(i, j):
        return (fact[i] * pow(fact[i-j], MOD-2, MOD))%MOD

    dist = []
    mdist = []

    for x0, y0 in maps:
        dist.append([])
        for x1,y1 in maps:
            if x0 == x1 and y0 == y1:
                dist[-1].append(INF)
            else:
                dist[-1].append(abs(x1 -x0) + abs(y1 - y0))
        mdist.append(min(dist[-1]))

    visited = [False]*n
    pairs = 0
    triples = 0
    quads = 0

    for i in range(n):
        if visited[i]:
            continue
        visited[i] = True
        candidates = {j for j in range(n) if dist[i][j] == mdist[i]}
        if len(candidates) > 3:
            continue
        if any(visited[j] for j in candidates):
            continue
        if any(mdist[j] != mdist[i] for j in candidates):
            continue
        if any({k for k in range(n) if dist[j][k] == mdist[i]} | {j} != candidates | {i} for j in candidates):
            continue
        for j in candidates:
            visited[j] = True
        if len(candidates) == 1:
            pairs += 1
        elif len(candidates) == 2:
            triples += 1
        else:
            quads += 1

    res = 0
    for p in range(pairs+1):
        for t in range(triples+1):
            for q in range(quads+1):
                s = n - 2*p - 3*t - 4*q
                groups = (comb(pairs, p)*comb(triples, t)*comb(quads,q))%MOD
                res += perm(n, s + p + t + q) * groups
                res %= MOD

    return res
