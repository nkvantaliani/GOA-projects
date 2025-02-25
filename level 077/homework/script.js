function getElementByIdAndModify(id) {
    let element = document.getElementById(id);

    if (element) {
        element.style.color = "blue";
        element.style.backgroundColor = "yellow"; 
        element.textContent = "kvata"; 
    }

    return element;
} 

getElementByIdAndModify("first");