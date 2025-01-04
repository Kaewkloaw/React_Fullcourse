// Arrow Function

// old
function fullname(firstname, lastname) {
  return firstname + ' ' + lastname;
}
console.log(fullname('Punchaya', 'Chancharoen'));

function setAge(age) {
  return age;
}
console.log(setAge(20));

// new
fullname = (firstname, lastname) => firstname + ' ' + lastname;
setAge=(age)=>age;
console.log(fullname('Punchaya', 'Chancharoen'));
console.log(setAge(20));