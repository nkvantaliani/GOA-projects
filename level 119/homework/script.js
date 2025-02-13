// 1

// function map(students) {
//     const studentMap = new Map();

//     for (let i = 0; i < students.length; i++) {
//         studentMap.set(students[i].name, students[i].score);
//     }
//     return studentMap;
// }

// const students = [
//     { name: "pipi", score: 85 },
//     { name: "und", score: 92 },
//     { name: "kaki", score: 78 }
// ];
// const studentMap = map(students);

// console.log(studentMap)

// 2 

function noDupe(array) {
    return [...new Set(array)];
}

const numbers = [1, 2, 3, 1, 2, 4, 5, 6, 4, 7];
const newArr = noDupe(numbers);

console.log(newArr);
 
// 3
function increaseScores(studentMap) {
    const updatedMap = new Map();

    for (let [name, score] of studentMap) {
        updatedMap.set(name, score + 5);
    }

    return updatedMap;
}
const students = new Map([
    ["pipi", 85],
    ["und", 92],
    ["kaki", 78]
]);

const updatedStudents = increaseScores(students);
console.log(updatedStudents); 
