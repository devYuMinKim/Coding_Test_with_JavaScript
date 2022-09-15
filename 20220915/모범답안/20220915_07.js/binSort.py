def solution(A):
    return sorted(A, key = lambda x: (bin(x).count('1'), x))