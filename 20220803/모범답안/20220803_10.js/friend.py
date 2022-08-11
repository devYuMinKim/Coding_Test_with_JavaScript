def solution(n, graph):
    '''
    :param n: int
    :param graph: int[][]
    :return: int[]
    '''

    return [bfs(n, i, graph) for i in range(n)]


def bfs(n, start, graph):
    que = []
    que_front = 0

    dist = [-1] * n

    que.append(start)
    dist[start] = 0

    while que_front < len(que):
        here = que[que_front]
        que_front += 1

        for i in range(n):
            if graph[here][i] == 0 or dist[i] != -1:
                continue

            dist[i] = dist[here] + 1

            if dist[i] < 2:
                que.append(i)
    
    return dist.count(2)
