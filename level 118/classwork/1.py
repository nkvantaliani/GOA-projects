def multi_table(number):
    table=""
    for i in range(1,11):
        if i!=10:
            table+=str(i) + " * " +  str(number) + " = " + str(i*number) + "\n"
        else:
            table+=str(i) + " " +  str(number) + " = " + str(i*number)
    return table