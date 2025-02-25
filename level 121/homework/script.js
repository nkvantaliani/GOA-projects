const func1 = (func2) => {
    console.log(func2("nata"))
}

console.log(func1((name) => {
    setTimeout(() => {
        console.log(name);
    }, 2000);
}))

// const func1 = (message, func2) => {
//     setTimeout((message) => {
//         console.log(message);
//     }, 2000)

//     console.log(func2());
// }

// console.log(func1(() => {
//     console.log("ended");
// })