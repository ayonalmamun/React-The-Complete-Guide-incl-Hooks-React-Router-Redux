// ES7
class Person {
    name = 'Ayon';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();