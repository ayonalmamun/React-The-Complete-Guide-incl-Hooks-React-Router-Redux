// spread example:1
const number = [1, 2, 3];
const newNumber = [...number, 4];

console.log(number);
console.log(newNumber);


// spread example:2
const person = {
    name: 'Ayon'
};

const newPerson = {
    ...person,
    age: 20
}

console.log(newPerson);

// rest
const filter = (...args) => {
    return args.filter(arg => arg != 1);
}

console.log(filter(1,2,3,4,5));