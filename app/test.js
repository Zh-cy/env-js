
class Person {
    constructor(lastName, firstName, age) {
        this.lastName = lastName,
            this.firstNa = firstName,
            this.age = age;
    }

    speak() {
        console.log('hello world');
    }
}


let father = new Person('la', 'fi', 30);

father.age = 33;
father.child = new Person('er', 'zi', 1);

console.log(father);
father.speak();
father.child.speak();