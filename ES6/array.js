// Array
// -join : joins all elements of an array into a string
// -concat : merges two or more arrays
// -push : adds one or more elements to the end of an array
// -pop : removes the last element from an array
// -shift : removes the first element from an array
// -unshift : adds one or more elements to the beginning of an array
// -splice : adds or removes elements from an array
// -slice : extracts a section of an array and returns a new array
// -loop : loops through the elements of an array
// -search : searches an array for an element and returns its position
// -sort : sorts the elements of an array

// join
const data = [1, 2, 3, 4, 5]
console.log(data); // [1,2,3,4,5]
console.log(data.join()); // 1,2,3,4,5

// concat
const data2 = [6, 7, 8, 9, 10]
console.log(data2); // [6,7,8,9,10]
console.log(data2.concat(data)); // [6,7,8,9,10,1,2,3,4,5]

// join + concat
console.log(data.concat(data2).join()); // 1,2,3,4,5,6,7,8,9,10

// push
const data3 = [11, 12, 13, 14, 15]
data3.push(16)
console.log(data3); // [11,12,13,14,15,16]

// pop
data3.pop()
console.log(data3); // [11,12,13,14,15]
data3.pop()
console.log(data3); // [11,12,13,14]

// shift
data3.shift()
console.log(data3); // [12,13,14]
data3.shift()
console.log(data3); // [13,14]

// unshift
data3.unshift(11)
console.log(data3); // [11,13,14]
data3.unshift(12)
console.log(data3); // [12,11,13,14]

// splice
const data4 = [1, 2, 3, 4, 5]
data4.splice(1, 3, 999) // 1 = index, 3 = number of elements to remove, 999 = element insertions
console.log(data4); // [1,999,5]

// slice
const data5 = [6, 7, 8, 9, 10]
console.log(data5.slice(1, 3)); // [7,8]

// 2:24:00
