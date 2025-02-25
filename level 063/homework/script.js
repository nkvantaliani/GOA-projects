// 1 

function greet(name = "Guest"){
    console.log("Hello" + " " + name);
}
greet();
greet("Nata");

// 2

function add_number(num1, num2 = 0){
    console.log(num1 + num2);
}
add_number(2);
add_number(4, 5);

// 3

function calculate_area(width = 1, length){
    console.log(width * length);
}
calculate_area(8, 4);


// 4 

function convert_temperature(temp, scale) {
    if (scale === undefined) {
        scale = "C"; 
    }

    if (scale === "C") {
        console.log((temp * 9 / 5) + 32);
    } else if (scale === "F") {
        console.log((temp - 32) * 5 / 9);
    } else {
        console.log("Invalid");
    }
}

// 5

function add_to_shopping_list(item, quantity = 1){
    item = prompt("enter item name");
    quantity = ("enter quantity");
}

add_to_shopping_list();

// 6 

function power(base, exponent = 2){
    console.log(base ** exponent);
}

power(5);
power(2,3);


// 7 

function create_message(greet = "Hello"){
    console.log(greet);
}
create_message();
create_message(prompt("enter message"));


// 8 

function  apply_discount(price, discount = 10){
    console.log(price - price * (discount / 100));
}

apply_discount(100);
apply_discount(900, 40);

// 9 

function introduce(name = "unknown", age = "unknown", country = "unknown"){
    console.log("my name is ${name}  i'm  ${age}  i'm from ${country}");
}

introduce(prompt("enter your name"), prompt("enter your age"), prompt("enter where u live"));
introduce();

// 10

function calculate_price(price, tax = 5){
    console.log(price + price * (tax / 100));
}
calculate_price(prompt("enter item price"));


// 11

function find_max(num1, num2, num3){
    let max;

    if (num1 >= num2 && num1 >= num3) {
        max = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        max = num2;
    } else {
        max = num3;
    }
    console.log(max);
}
find_max(num1 = 4, num2 = 19, num3 = 3);


// 12

function pass_or_fail(score){
    if(score >= 50){
        console.log("Pass");
    }
    else {
        console.log("Fail")
    }
}
pass_or_fail(prompt("Enter your score"));

// 13

function sum_of_numbers(nums){
    let sum = 0;
    for(let i of nums){
        sum = sum + i
    }
    console.log(sum);
}
sum_of_numbers([2, 4, 6]);

// 14

function count_evens(numbers){
    let even = [];
    for(let i of numbers){
        if(i % 2 === 0){
            even.push(i);
        }
    }
    console.log(even.length);
}
count_evens([1,2,3,4,5,6,7,8,9]);