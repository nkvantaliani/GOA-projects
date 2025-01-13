def tic(tac):
    # i row
    # n col



    for n in range(len(tac)):
        if tac[0][n] != "" and tac[0][n] == tac[1][n] and tac[1][n] == tac[2][n]:
            return tac[0][n] + " wins"
    for i in tac:
        if i[0] != "" and i[0] == i[1] and i[1] == i[2]:
            return i[0] + " wins"
    if tac[0][0] != "" and tac[0][0] == tac[1][1] and tac[1][1] == tac[2][2]:
        return tac[0][0] + " wins"

    if tac[0][2] != "" and tac[0][2] == tac[1][1] and tac[1][1] == tac[2][0]:
        return tac[0][2] + " wins"

    for i in tac:
        for n in i:
            if n == "":
                return "game isn't over yet"

 
    return "tie"

tac = [
    ["X", "0", "X"],
    ["0", "X", "X"],
    ["0", "X", "0"]
]

print(tic(tac))