function ageCheck(age){
    if (age > 18){
        document.getElementById("p").textContent = ("You are an adult");
    }
    else{
        document.getElementById("p").textContent = ( "You are not an adult");
    }
}
ageCheck(prompt("Enter your age"))


function evenNums(nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]){
    let even = []
    for( let i of nums){
        if ( i % 2 === 0){
            even.push(i);
        }
    }
    console.log(even);
}
evenNums();

