function changeText() {
    const textContainer = document.getElementById("text-container");
    textContainer.innerText = "Changed Text";
    console.log(textContainer.innerText);
}


function swapColors() {
    const colorBlock = document.getElementById("color-block");
    const bgColor = colorBlock.style.backgroundColor;
    const textColor = colorBlock.style.color;

    colorBlock.style.backgroundColor = textColor;
    colorBlock.style.color = bgColor;
}

function hideElement() {
    const element = document.getElementById("hide-element");
    element.style.display = "none";
}

function changeFont() {
    const elements = document.getElementsByClassName("change-font");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontFamily = "Courier New";
    }
}

function updateParagraph() {
    const paragraph = document.getElementById("paragraph");
    paragraph.innerText = "Updated content!";
}

function changeImage() {
    const image = document.getElementById("image");
    image.src = "n.jpg";
}


function displayInput() {
    const input = document.getElementById("user-input").value;
    const output = document.getElementById("output");
    output.innerText = input;
}
