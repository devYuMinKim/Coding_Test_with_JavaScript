def priority(op):
    if op == "+" or op == "-":
        return 1
    elif op == "*" or op == "/":
        return 2

def solution(S):
    result =""
    stack = []
    op = ""

    S = S.split(" ")

    for s in S:
        if s == "(":
            stack.append(s)
        elif s == ")":
            while len(stack) > 0:
                temp = stack.pop()
                if temp == "(": break
                result += (" " + temp)
        elif s == "+" or s == "-" or s == "*" or s == "/":
            while len(stack) != 0 and priority(s) <= priority(stack[len(stack)-1]):
                result += (" " + stack.pop())

            stack.append(s)
        else:
            result += (" " + s)

    while len(stack) > 0:
        result += (" " + stack.pop())

    return result.strip()
