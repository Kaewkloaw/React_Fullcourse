// Block Scope (let/constant)

// old : var
var x = 10;
if (x===10) {
  var y = 20;
  console.log('y =',y);
}
console.log('y =',y); // var is working out of block scope (problem)

// new : let
let z = 10;
if (z===10) {
  let w = 20;
  console.log('w =',w);
}
// console.log('w =',w); // let is not working out of block scope

// constant
const a = 10;
// a = 20; // error
console.log('a =',a);