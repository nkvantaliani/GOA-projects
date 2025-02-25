// 1

function multiply(){
    let num1 = prompt("Enter num1:");
    let num2 = prompt("Enter num2:");
    let result = num1 * num2;
    console.log(result);
  }
  
multiply();

// 2

function subtract(){
    let num1 = prompt("Enter num1:");
    let num2 = prompt("Enter num2:");
    let result = num1 - num2;
    console.log(result);
  }
  
subtract();

// 3 

function divide(){
    let num1 = prompt("Enter num1:");
    let num2 = prompt("Enter num2:");
    let result = num1 / num2;
    console.log(result);
  }
  
divide();

// 4

function fullName(){
    let firstName = prompt("Enter your firsr name");
    let lastName = prompt("Enter your last name");
    let fullName = firstName + lastName;
    console.log (fullName);
}

fullName();

// 5

function minutesToSeconds(){
    let min = prompt("Enter mins");
    let sec = min * 60;
    console.log(sec);
}

minutesToSeconds();

// 6

function rectangleArea(){
    let height = prompt("Enter height");
    let width = prompt("Enter width");
    let area = height * area;
    console.log(area);
}

rectangleArea();

// 7

function concatenateStrings(){
    let a = prompt("Enter random word");
    let b = prompt("Enter another random word");
    let concatenate = a + b;
    console.log(concatenate);
}

concatenateStrings();

// 8 

function power(){
    let baseNumber = prompt('Enter base number');
    let exponent = prompt("Enter exponent");
    let result = baseNumber ** exponent;
    console.log(result);
}

power();

// 9 

function circumference(){
    let pi = 3.1415926;
    let radius = prompt("Enter radius");
    let cim = 2 * pi * radius;
    console.log(cim);
}

circumference();

function nextNumber(){
    let num = prompt("Enter your number");
    console.log(num + 1);
}

nextNumber();
