def solution(grid):
    '''
    :param array_1: list
    :return: int
    '''
    answer = 0

    q = []
    m = len(grid)
    n = len(grid[0])

    visited = [[0] * n for _ in range(m)]
    dir = [
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ]

    for y in range(m):
        for x in range(n):

            if grid[y][x] == "0":
                continue
            if visited[y][x] == 1: 
                continue
            q.append([y, x])
            visited[y][x] = 1

            answer += 1

            while(q):
                curNode = q.pop()
                for i in range(4):
                    nxtY = curNode[0] + dir[i][0]
                    nxtX = curNode[1] + dir[i][1]
                    if nxtY >= m or nxtX >=n or nxtY < 0 or nxtX < 0:
                        continue
                    if visited[nxtY][nxtX] == 1:
                        continue
                    if grid[nxtY][nxtX] == "0":
                        continue
                    visited[nxtY][nxtX] = 1
                    q.append([nxtY,nxtX])
                    
    return answer
