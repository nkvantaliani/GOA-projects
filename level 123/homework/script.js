const func = promise => {
    promise
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
}

console.log(func(new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("failed");
    }, 2000);

    resolve("complete");
})))

const func1 = promise => {
    promise
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
}

console.log(func1(new Promise((resolve, reject) => {
    let num = Math.random(1, 4);
    
    setTimeout(() => {
        reject("failed");
    }, Number(String(num + "000")))

    resolve("");
})))