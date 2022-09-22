def solution(N, language):
    '''
    :param N: int
    :param language: list
    :return: int
    '''
    graph = [[] for i in range(N)]
    for x, y in language:
        graph[x].append(y)
        graph[y].append(x)

    visited = [False] * N
    pairs = N * (N-1) // 2

    def dfs(u, graph, visited):
        visited[u] = True
        vertices = 1
        for v in graph[u]:
            if visited[v] == False:
                vertices += dfs(v, graph, visited)
        return vertices

    for v in range(N):
        if visited[v] == False:
            persons = dfs(v, graph, visited)
            pairs -= persons * (persons - 1) // 2
    
    return pairs
