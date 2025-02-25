// 1

function evenOrOdd(num){
    if(num % 2 === 0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}
evenOrOdd(prompt("Enter Random Number"));

// 2

// function emptyOrNot(list){
//     if(list.lenght === 0){
//         console.log("List is empty");
//     }
//     else{
//         let total = 0;
//     for (let i = 0; i < list.length; i++) {
//         total += list[i];
//     }
// }
// }
// emptyOrNot([1,2,3,4,5]);
// emptyOrNot([]);

// 3 

function multiply(list){
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        let multiplied = numbers[i] * 3;
        if (multiplied > 20) {
            result.push(multiplied);
        }
    }
    console.log(result);
}
multiply([20,21,1,3,4,99]);

// 4


