let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let p = document.getElementById("p");
let input = document.getElementById("input"); 
let count = 0;

function color() {
    p.textContent = count;
    if (count < 0) {
        p.style.color = "red"; 
    } else if (count > 0) {
        p.style.color = "green"; 
    } else {
        p.style.color = "black"; 
    }
}

decrease.onclick = function () {
    let step = parseInt(input.value) || 0;
    if (step > 100) {
        alert("100-ზე მეტი რიცხვის გამოკლება არ შეიძლება");
        return;
    }
    count -= step;
    color();
};

increase.onclick = function () {
    let step = parseInt(input.value) || 0;
    if (step > 100) {
        alert("100-ზე მეტი რიცხვის მიმატება არ შეიძლება");
        return;
    }
    count += step;
    color();
};


reset.onclick = function () {
    if (count === 0) {
        alert("რიცხვი უკვე 0-ზეა");
        return;
    }
    count = 0;
    color();
}
