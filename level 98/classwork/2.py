def sixshire(string):
    sixsh = {}
    for i in string:
        if i in sixsh:
            sixsh[i] += 1
        else:
            sixsh[i] = 1
    return sixsh

string = "nata"
res = sixshire(string)
print(res)