import turtle
from random import randint

"""This function draws a range of mountains on the screen.
Each mountain peak is randomly generated within a predefined range,
and the number of mountains drawn is based on the width of the screen."""
def drawMountains(project):
    screen_width = turtle.window_width()
    peak_distance = screen_width // 10  
    project.penup()
    project.goto(-screen_width // 2, 80)
    project.pendown()
    project.color("#057203")  
    project.fillcolor("#057203")  
    project.begin_fill()

    #Loop through each mountain peak
    for peak in range(1, 11):
        #Move to the next peak position   
        project.goto(-screen_width // 2 + peak * peak_distance, randint(40, 160))
    project.goto(screen_width // 2, -200)
    project.goto(-screen_width // 2, -200)
    project.goto(-screen_width // 2, 80)
    project.end_fill()

"""This function draws battlements on the screen, forming a wall-like structure.
Parameters:
project: The turtle project to draw the battlements.
x: The starting x-coordinate of the battlements.
y: The starting y-coordinate of the battlements.
w: The width of the battlements.
h: The height of the battlements."""
def drawBattlements(project, x, y, w, h):
    project.penup()
    project.goto(x, y)
    project.pendown()
    project.color("#DBDEF3")
    project.fillcolor("#373D67")
    project.begin_fill()

    #Calculate the end point of the battlements
    xEnd = x + w

    #Loop until reaching the end of the battlements
    while x < xEnd:
        # Draw the vertical line of the battlement
        project.goto(x, y)
        project.goto(x, y + h)
        project.goto(x + 20, y + h)
        project.goto(x + 20, y)

    #Check if there's enough space for the next battlement
        if x + 20 < xEnd:
            project.goto(x + 40, y)

    #Move to the next position for drawing the next battlement
        x = x + 40

    #End filling the battlements shape
    project.end_fill()

"""This function draws a wall on the screen, optionally with battlements (crenellation) on top.
Parameters:
project: The turtle project to draw the wall.
x: The starting x-coordinate of the wall.
y: The starting y-coordinate of the wall.
w: The width of the wall.
h: The height of the wall.
crenellation: A boolean value indicating whether to draw battlements on top of the wall."""
def drawWall(project, x, y, w, h, crenellation):
    project.penup()
    project.goto(x, y)
    project.pendown()
    project.color("#DBDEF3")  
    project.fillcolor("#959ABB") 
    project.begin_fill()
    project.goto(x + w, y)
    project.goto(x + w, y + h)
    project.goto(x, y + h)
    project.goto(x, y)
    project.end_fill()
    #Draw battlements if required
    if crenellation:
        drawBattlements(project, x, y + h, w, 20)

"""This function draws a triangular roof on the screen.
Parameters:
project: The turtle project to draw the roof.
x: The starting x-coordinate of the roof.
y: The starting y-coordinate of the roof.
w: The width of the roof base.
h: The height of the roof."""
def drawRoof(project, x, y, w, h):
    project.penup()
    project.goto(x, y)
    project.pendown()
    project.color("#DBDEF3")  
    project.fillcolor("#0A135A") 
    project.begin_fill()
    project.goto(x, y)
    project.goto(x + w // 2, y + h)
    project.goto(x + w, y)
    project.goto(x, y)
    project.end_fill()

"""This function draws a tower on the screen, optionally with battlements (crenellation) on top.
Parameters:
project: The turtle project to draw the tower.
x: The starting x-coordinate of the tower.
y: The starting y-coordinate of the tower.
w: The width of the tower.
h: The height of the tower.
crenellation: A boolean value indicating whether to draw battlements on top of the tower.
"""
def drawTower(project, x, y, w, h, crenellation):
    drawWall(project, x, y, w, h, False)
    if crenellation:
        drawWall(project, x - 20, y + h, w + 40, 40, True)
    else:
        drawRoof(project, x - 10, y + h, w + 20, 60)

"""This function draws a door on the screen.
Parameters:
project: The turtle project to draw the door.
x: The x-coordinate of the center of the door.
y: The y-coordinate of the bottom of the door.
w: The width of the door.
h: The height of the door.
"""
def drawDoor(project, x, y, w, h):
    project.penup()
    project.goto(x - w // 2, y)
    project.pendown()
    project.color("#DBDEF3")  
    project.fillcolor("#181C37")  
    project.begin_fill()
    project.goto(x - w // 2, y + h - w // 2)
    project.goto(x + w // 2, y + h - w // 2)
    project.goto(x + w // 2, y)
    project.goto(x - w // 2, y)
    project.end_fill()

    project.penup()
    project.goto(x + w // 2, y + h - w // 2)
    project.setheading(90) 
    project.pendown()
    project.begin_fill()
    project.circle(w // 2, 180)  
    project.end_fill()

#This function draws a loophole (opening) on the screen.
def drawLoophole(project, x, y, w, h):
    project.penup()
    project.goto(x - w // 2, y)
    project.pendown()
    project.color("#000000")  
    project.fillcolor("#000000")  
    project.begin_fill()
    project.goto(x, y)
    project.goto(x + w // 2, y)
    project.goto(x + w // 2, y + h)
    project.goto(x - w // 2, y + h)
    project.goto(x - w // 2, y)
    project.end_fill()

#this function draws a GOA flag
def drawGOAFlag(project, x, y, w, h):
    project.penup()
    project.goto(x, y)
    project.pendown()
    project.color("#000000") 
    project.fillcolor("#000000")
    project.begin_fill()
    project.goto(x + w * 2, y + h)
    project.goto(x, y + h * 2)
    project.goto(x, y)
    project.end_fill()
    project.penup()
    project.goto(x + w // 2, y + h) 
    project.pendown()
    project.color("#00FF00")  
    project.write("GOA", align="center", font=("Arial", int(w // 5), "bold"))

#This function draws a queen chess piece on the screen.
def drawQueen(project, x, y):
    # Draw the main body of the queen
    project.penup()
    project.goto(x, y)
    project.pendown()
    project.color("#800080")
    project.fillcolor("#800080")
    project.begin_fill()
    project.goto(x - 20, y)
    project.goto(x, y + 60)
    project.goto(x + 20, y)
    project.goto(x - 20, y)
    project.end_fill()

    #Draw the dress part of the queen
    project.penup()
    project.goto(x, y + 70)
    project.pendown()
    project.color("#FFDAB9")
    project.fillcolor("#FFDAB9")
    project.begin_fill()
    project.goto(x - 10, y + 60)
    project.goto(x - 10, y + 70)
    project.goto(x + 10, y + 70)
    project.goto(x + 10, y + 60)
    project.goto(x - 10, y + 60)
    project.end_fill()

    #Draw the head part of the queen
    project.penup()
    project.goto(x - 10, y + 70)
    project.pendown()
    project.color("#FFD700")
    project.fillcolor("#FFD700")
    project.begin_fill()
    project.goto(x - 10, y + 70)
    project.goto(x - 5, y + 80)
    project.goto(x, y + 75)
    project.goto(x + 5, y + 80)
    project.goto(x + 10, y + 70)
    project.goto(x - 10, y + 70)
    project.end_fill()

    # Draw the eyes of the queen
    project.penup()
    project.goto(x - 5, y + 65)
    project.pendown()
    project.color("#000000")
    project.dot(2)
    project.penup()
    project.goto(x + 5, y + 65)
    project.pendown()
    project.dot(2)

    #Draw the crown part of the queen
    project.penup()
    project.goto(x, y + 62)
    project.pendown()
    project.goto(x, y + 60) 

    # Draw the crown extensions
    project.penup()
    project.goto(x - 20, y + 20)
    project.pendown()
    project.goto(x - 30, y + 30) 
    project.penup()
    project.goto(x + 20, y + 20)
    project.pendown()
    project.goto(x + 30, y + 30)


#This function draws a king chess piece on the screen.
def drawKing(project, x, y):
    # Draw the main body of the king
    project.penup()
    project.goto(x, y)
    project.pendown()
    project.color("#0000FF") 
    project.fillcolor("#0000FF")
    project.begin_fill()
    project.goto(x - 20, y)
    project.goto(x, y + 60)
    project.goto(x + 20, y)
    project.goto(x - 20, y)
    project.end_fill()

    # Draw the robe part of the king
    project.penup()
    project.goto(x, y + 70)
    project.pendown()
    project.color("#FFDAB9")
    project.fillcolor("#FFDAB9")
    project.begin_fill()
    project.goto(x - 10, y + 60)
    project.goto(x - 10, y + 70)
    project.goto(x + 10, y + 70)
    project.goto(x + 10, y + 60)
    project.goto(x - 10, y + 60)
    project.end_fill()

    # Draw the crown part of the king
    project.penup()
    project.goto(x - 10, y + 70)
    project.pendown()
    project.color("#FFD700")
    project.fillcolor("#FFD700")
    project.begin_fill()
    project.goto(x - 10, y + 70)
    project.goto(x - 8, y + 80)
    project.goto(x - 4, y + 75)
    project.goto(x, y + 80)
    project.goto(x + 4, y + 75)
    project.goto(x + 8, y + 80)
    project.goto(x + 10, y + 70)
    project.goto(x - 10, y + 70)
    project.end_fill()

    # Draw the eyes of the king
    project.penup()
    project.goto(x - 5, y + 65)
    project.pendown()
    project.color("#000000")
    project.dot(2)
    project.penup()
    project.goto(x + 5, y + 65)
    project.pendown()
    project.dot(2)

    #Draw the crown extensions
    project.penup()
    project.goto(x - 20, y + 20)
    project.pendown()
    project.goto(x - 30, y + 30) 
    project.penup()
    project.goto(x + 20, y + 20)
    project.pendown()
    project.goto(x + 30, y + 30)



project = turtle.Turtle()

project.speed(100)
project.color("#F1F2FA")  
wn = turtle.Screen()
wn.bgcolor("#F1F2FA") 

drawMountains(project)
drawWall(project, -150, -150, 300, 150, True)
drawDoor(project, 0, -150, 60, 80)
drawTower(project, -150, -150, 60, 220, True)
drawTower(project, 90, -150, 60, 220, False)
drawGOAFlag(project, 120, 130, 60, 40)
drawLoophole(project, -120, -120, 10, 30)
drawLoophole(project, 120, -120, 10, 30)
drawLoophole(project, -120, 0, 10, 30)
drawLoophole(project, 120, 0, 10, 30)
drawLoophole(project, -60, -80, 10, 30)
drawLoophole(project, 60, -80, 10, 30)

drawQueen(project, -200, -150)
drawKing(project, 100, -150)

project.hideturtle()
turtle.done()

