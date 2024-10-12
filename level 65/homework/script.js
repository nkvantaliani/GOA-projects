function ageCheck(age){
    if (age > 18){
        document.getElementById("p").textContent = ("You are an adult");
    }
    else{
        document.getElementById("p").textContent = ( "You are not an adult");
    }
}
ageCheck(prompt("Enter your age"))