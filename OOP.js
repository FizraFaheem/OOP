class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        if (age > 0) {
            this.age = age;
        }
        else {
            console.log("Age must be a positive number.");
        }
    }
    describe() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
const person1 = new Person("Alice", 30);
person1.describe(); // Output: Alice is 30 years old.
person1.setName("Bob");
person1.setAge(25);
person1.describe(); // Output: Bob is 25 years old.
export {};
