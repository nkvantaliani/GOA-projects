function manualFilter(array, integer) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= integer) { 
            result.push(array[i]);  
        }
    }
    return result;
}

let numbers = [5, 3, 8, 1, 2];
console.log(manualFilter(numbers, 3)); 