
def calc(num1,num2,symbol):
    if symbol == "-":
        anws = num1 - num2
        return anws
    elif symbol == "+":
        anws = num1 + num2
        return anws
    elif symbol == "*":
        anws = num1 * num2
        return anws
    elif symbol == "/":
        anws = num1 / num2
        return anws
    else:
        return "wrong input try again"
print(calc(9,3,"/"))

