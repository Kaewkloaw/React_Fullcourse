// Rest Parameter

sum=(...number)=> {
    let total = 0;
    for (let i = 0; i < number.length; i++) {
        total += number[i]
    }
    return total;
}

console.log(sum(1,2)); // 3
console.log(sum(1,2,3)); // 6
console.log(sum(1,2,3,4)); // 10
console.log(sum(1,2,3,4,5)); // 15