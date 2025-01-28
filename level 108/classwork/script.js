const func = (str) => {
    let strLength = [str]
    let result = "";

    for (let i = 0; i < str[strLength.length]; i++) {
        if (str[i] === i) {
            return false;
        }

        result = str[i];
    }

    return result;
}

console.log(func("hidroeleqtrosadguri"));