const myform = document.getElementById("myform")
const data = []
myform.addEventListener("submit",(e) =>{
    e.preventDefault()
    const email = myform.email.value
    const pass = myform.pass.value
    const oldAcc = [{
        email: "berdiabekauri5@gmail.com",
        password: "Berdiabekauri123"
    }]

    if (email === "" || pass === "") {
        alert("Incorrect please fill the input values");
        return;
    }

    if (email === oldAcc.email || pass === oldAcc.password) {
        alert("Account has been already created");
        return;
    }

    data.push({
        email: email,
        password: pass
    });

    console.log(data);
})