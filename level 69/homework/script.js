// 1

// Get Length: Create an array with 5 items. Log the length of the array.

let array7 = ["nata", 15, "25", 20.05, true];
console.log(array7.length);

// Convert to String: Convert the same array to a string using toString() and log the result.
 
let nums = [1,2,3];
console.log(nums.toString());

// Access Element: Use the at() method to access the second element and log it.

let arr1 = [21, 42, 55];
console.log(arr1.at(1));

// Join Elements: Use join() to combine the array elements with - between them.

let array1 = ["Nata", "Kvata"];
console.log(array1.join(":3"))

// Push & Pop: Add two new elements to the array using push(), then remove the last element using pop().


let names = ['Nata', 'Lizi', 'Nini'];
names.push('nino');
names.push('Mari');

let removed = names.pop();

console.log(names);
console.log(removed); 

// 2

// Shift Element: Create an array and remove the first element using shift().
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.shift();
console.log(arr); 

// Unshift Element: Add a new element at the beginning using unshift().
arr.unshift(0);
console.log(arr);
console.log(arr.length); 

// Delete Element: Use the delete operator to remove the second element. Log the array and observe the result.
delete arr[1]; 
console.log(arr);

// Concatenate Arrays: Create two arrays and use concat() to merge them.
let arr2 = [6, 7, 8];
let mergedArray = arr.concat(arr2);
console.log(mergedArray);

// Explore Unshift & Length: After using unshift(), log the new length of the array.
arr.unshift(-1);
console.log(arr);
console.log(arr.length);

// 3

let array = ['apple', 'banana', 'cherry', 'apple', 'banana', 'cherry'];

// Find Index: Create an array with repeated values. Use indexOf() to find the first occurrence of an element.
let firstIndex = array.indexOf('banana');
console.log(firstIndex);

// Find Last Index: Use lastIndexOf() to find the last occurrence of the same element.
let lastIndex = array.lastIndexOf('banana');
console.log(lastIndex);

// Check Inclusion: Use includes() to check if a specific element exists in the array.
let includesApple = array.includes('apple');
console.log(includesApple);

// Invalid Index Search: Use indexOf() to search for a non-existing element. Log the result.
let nonExistentIndex = array.indexOf('orange');
console.log(nonExistentIndex);

// Case Sensitivity: Check if includes() is case-sensitive by searching for different cases of the same string
let includesAppleLowercase = array.includes('apple');
let includesAppleUppercase = array.includes('Apple');

console.log(includesAppleLowercase);
console.log(includesAppleUppercase);
