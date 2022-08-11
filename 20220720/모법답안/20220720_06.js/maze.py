
def solution(n, m, s, maps):
  '''
  :param n: int
  :param m: int
  :param s: int
  :param maps: list
  :return: string
  '''
  graph = [[] for _ in range(n + 1)]
  color = [0] * (n + 1)
  parent = [0] * (n + 1)
  
  for map in maps:
    u, v = map[0], map[1]
    graph[u].append(v)

  color[s] = 1
  parent[s] = 0

  cnt = 2

  for i in graph[s]:
    color[i] = cnt
    parent[i] = s
    cnt += 1

  def dfs(x):
    lst = [x]
    while True:
      if len(lst) == 0: return None

      if len(graph[lst[-1]]) == 0:
        lst.pop()
        continue

      u = graph[lst[-1]].pop()

      if color[u] == 0:
        color[u] = color[lst[-1]]
        parent[u] = lst[-1]
        lst.append(u)
      elif color[u] == 1 or color[u] == color[lst[-1]]:
        pass
      else:
        return [u, lst[-1]]

  for i in graph[s]:
      val = dfs(i)
      if val and len(val) == 2:
          return "YES"

  return "NO"
