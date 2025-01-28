function matrixSum(matrix) {
    let sum = 0;
    for (let row of matrix) {
        for (let num of row) {
            sum += num;
        }
    }
    return sum;
}


const matrix = [
    [1, 3],
    [1, 4],
    [4, 1],
    [2, 2]
];

console.log(matrixSum(matrix)); 
