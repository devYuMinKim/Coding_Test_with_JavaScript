
def solution(S):
    arr = [ s for s in S ]
    numbers = re.findall(r'\d+', S)
    operators = re.findall(r'[+\-*/]', S)

    temp = float(numbers[0])
    result = 0

    for i in range (len(operators)):
        if operators[i] == '*':
            temp *= float(numbers[i+1])
        elif operators[i] == '/':
            temp /= float(numbers[i+1])
        elif operators[i] == '+':
            result += temp
            temp = 0
            temp += float(numbers[i+1])
        elif operators[i] == '-':
            result += temp
            temp = 0
            temp -= float(numbers[i+1])

    result += temp

    return '%0.2f' % result
