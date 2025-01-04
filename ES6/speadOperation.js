// Spead Opeartor

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const data = [10, 20, ...newArr]
// or data.push(...newArr)

console.log(data)
// display
// [
//     10, 20, 1, 2, 3,
//      4,  5, 6, 7, 8,
//      9, 10
//   ]