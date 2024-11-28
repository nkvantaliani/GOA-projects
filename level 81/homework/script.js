let isFaded = true;
document.getElementById("fadeButton").onclick = function () {
    const box = document.getElementById("fadeBox");
    box.style.opacity = isFaded ? "1" : "0";
    isFaded = !isFaded;
};