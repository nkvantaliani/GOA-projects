function findUniqueElements(matrix) {
    let flatArray = []; 

    matrix.forEach(row => {
        row.forEach(element => {
            flatArray.push(element);
        });
    });
    
    let elementCount = {}; 

    flatArray.forEach(element => {
        elementCount[element] = (elementCount[element] || 0) + 1;
    });

    return flatArray.filter(element => elementCount[element] === 1);
}

const matrix = [
    [1, 2, 3],
    [4, 2, 5],
    [6, 1, 7]
];

console.log(findUniqueElements(matrix)); 