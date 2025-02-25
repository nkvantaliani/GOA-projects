#daily fitness goal is 10000steps and 30 active minutes

# Complete the code to output True if the user has achieved the daily fitness goal, and False otherwise


steps = int(input("Steps:"))
active_minutes = int(input("Active minutes:"))


goal = steps>10000 or active_minutes>30

if goal == True:
    print ("Goal achived")

if goal == False:
    print("Goal not achived")

