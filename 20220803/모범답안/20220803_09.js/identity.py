from collections import defaultdict

def solution(identity):
    '''
    :param identity: list
    :return: int
    '''
    g = defaultdict(set)
 
    global_set = set()
    for id in identity:
        for e in id:
            global_set.add(e)
            g[id[0]].add(e)
            g[e].add(id[0])
 
    visited = set()
    c = 0
 
    for e in global_set:
        if e in visited:
            continue
        c += 1
        stack = [e]
        while stack:
            v = stack.pop()
            for nv in g[v]:
                if nv in visited:
                    continue
                visited.add(nv)
                stack.append(nv)

    return c
