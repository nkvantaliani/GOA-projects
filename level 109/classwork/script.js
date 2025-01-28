const func = (func, arr) => {
    const appendElements = prompt("Enter the amount of elements: ");
    for (let i = 0; i < appendElements; i++) {
        const indexName = prompt(`Enter the ${i}th elements name: `);
        const copy = [indexName];

        return arr.push(copy);
    }
}