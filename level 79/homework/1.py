# დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს 
# ფიგურის ფართობი მართკუთხედისთვის(ინფუთი იქნება 2  რიცხვი) , 
#  წრისთვის (ინფუთი იქნება 1 მთელი რიცხვი ) და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)
# ( პითონში და ასევე ჯავასკიპტში ) 
# ( სამკუთხედზე გამოიყენეთ ჰერონის ფორმულა )

def count_area(*size):
    if len(size) == 1:
        radius = size[0]
        area = 3.1415926 * (radius**2)
        return f"area is {area}"
    elif len(size) == 2:
        length, width = size
        area = length * width
        return f"area is {area}"
    elif len(size) == 3:
        a, b, c = size
        s = (a + b + c) / 2
        area = (s * (s - a) * (s - b) * (s - c)) ** 0.5 
        return f"area is {area}"
print(count_area(3,4,2))

