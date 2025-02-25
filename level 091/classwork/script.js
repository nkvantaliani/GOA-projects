let users = [
    { username: "user1", password: "paroli123" },
    { username: "user2", password: "paroli456" }
]

function forms(event) {
    event.preventDefault();

let email = document.getElementById("email").value;
let name = document.getElementById("username").value;
let password = document.getElementById("password").value;
let confpass = document.getElementById("confpass").value;
let age = document.getElementById("age").value;

if (password !== confpass) {
    alert("make sure to enter same passsss pls!!!!!!!!");
    return false;
}

if (parseInt(age) < 18) {
    alert("not old enough");
    return false;
} 
}