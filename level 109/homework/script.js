function customAssign(target, ...sources) {
    if (!target || typeof target !== "object") {
        throw new TypeError("Target must be an object");
    }

    sources.forEach(source => {
        if (source && typeof source === "object") {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
        }
    });

    return target;
}


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const result = customAssign({}, obj1, obj2, obj3);
console.log(result);
