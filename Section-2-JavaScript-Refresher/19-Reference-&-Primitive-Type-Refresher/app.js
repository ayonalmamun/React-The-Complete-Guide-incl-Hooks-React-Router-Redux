// Primitive Example: 1
const number = 1;
const number2 = number;

console.log(number, number2);

// Primitive Example: 2
let n1= 5;
const n2 = n1;
n1 = 3;

console.log(n1, n2);

// number, boolean, strings are called primitive. It copies the value when you reassaign/store it to another variable.


// Reference

const person = {
    name: 'Ayon'
};

const me = person;
person.name = 'Al Mamun';

console.log(me);

// the reason name is printed 'Al Mamun' because me object copied the pointer of the object person from memory.
// if we change any value in person object, we automatically change value of me object
// this will also happen in array too!

// solution spread operator
const friend = {
    name: 'habu'
};

const friend2 = {
    ...friend
};

friend.name = 'LK';

console.log(friend, friend2);

// Object & Array are reference type. If you reassign them, you are copying the pointer, not value.