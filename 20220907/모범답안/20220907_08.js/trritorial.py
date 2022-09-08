def search(arr, Countries, Country, count):
    for i , country in enumerate(Country):
        if country == 1 and arr[i] == 0:
            arr[i] = 1
            count += 1
            count = search(arr, Countries, Countries[i], count)
    return count

def solution(A):
    count = 0
    result = 0
    arr = [0 for i in range(len(A))]

    for i in range(len(A)):
        if arr[i] == 0:
            count = 1
            arr[i] = 1
            count = search(arr, A, A[i], count)
            if count > result:
                result = count

    return result