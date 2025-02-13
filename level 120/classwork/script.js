function func(sets) {
    let newS = new Set()
    for (let i of sets) {
        for (let value of i) {
            newS.add(value);
        }
    }
    return newS;
}

console.log(func([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));

function func(set1, set2) {
    let result = new Set();

    for (let i of set1) {
        if (!set2.has(i)) {
            result.add(i);
        }
    }

    for (let i of set2) {
        if (!set1.has(i)) {
            result.add(i);
        }
    }

    return result;
}

console.log(func(new Set([1, 2, 3]), new Set([3, 4, 5])));

function func(str) {
    let map = new Map();

    for (let i of str) {
        map.set(i, (map.get(i) || 0) + 1);
    }

    return map;
}


console.log(func("hello"));