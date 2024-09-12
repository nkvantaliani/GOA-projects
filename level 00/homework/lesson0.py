
from turtle import *
#drawing a house

# 1) drawing walls

width(3)
color("blue")
forward(210)
left(90)
forward(210)
left(90)
forward(210)
left(90)
forward(210)
left(90)

# 2) drawing a door

forward(70)
left(90)
color("yellow")
begin_fill()
forward(100)
right(90)
forward(70)
right(90)
forward(100)
end_fill()

# 3) drawing a roof

penup()
goto(210,210)
pendown()
color("Pink")
begin_fill()
right(150)
forward(210)
left(120)
forward(210)
end_fill()

# 4) drawing the windows
penup()
goto(60,100)
pendown()

right(60)
color("cyan")
begin_fill()
forward(50)
right(90)
forward(60)
right(90)
forward(50)
right(90)
forward(50)
end_fill()

penup()
goto(150,100)
pendown()

begin_fill()
left(90)
forward(50)
left(90)
forward(60)
left(90)
forward(50)
left(90)
forward(50)
end_fill()









exitonclick()