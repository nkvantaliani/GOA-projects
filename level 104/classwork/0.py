def main():
    while True:
        user_input = input("enter 2 num: ")
        
        if user_input.lower() == 'exit':
            print("ended.")
            break

        user_input_split = user_input.split()
        if len(user_input_split) == 2 and user_input_split[0].replace('.', '', 1).isdigit() and user_input_split[1].replace('.', '', 1).isdigit():
            num1 = float(user_input_split[0])
            num2 = float(user_input_split[1])
            result = num1 * num2
            print(f"mult: {result}")
        else:
            print("enter correct nums.")
            
main()