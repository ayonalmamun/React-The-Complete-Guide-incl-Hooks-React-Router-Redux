// destructure array example: 1
const number = [15, 18, 20];
const [num1, num2] = number;

console.log(num1, num2);

// destructure array example: 2
const [value1, , value2] = number;

console.log(value1, value2);

// destructure object example: 1
const { name } = { name: 'Ayon', age: 23 };
console.log(name);

// destructure object example: 2
const object1 = {
    codeName: 'kabila',
    occupation: 'thief'
};

const { occupation } = object1;
console.log(occupation);