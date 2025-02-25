const sub = (set1, set2) => {
    const set = new Set([set1, set2]);

    if (set === set1 && set2) {
        return true;
    } else {
        return false;
    }
}

console.log(sub(new Set([1, 2]), new Set([1, 2, 3])));

const funcMap = (map) => {
    console.log(map[map.length - 1]);
}
funcMap(new Map([['a', 1], ['b', 2], ['c', 1]]))

const max = (map) => {
    console.log(map[max(map)]);
}

max(new Map([['a', 5], ['b', 3], ['c', 5]]));