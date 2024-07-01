//OOP
class Person {
    private name: string;
    private age:number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        if (age > 0) {
            this.age = age;
        } else {
            console.log("Age must be a positive number.");
        }
    }

    public describe(): void {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const person1 = new Person("Ahmed", 30);
person1.describe(); // Output: Ahmed is 30 years old.

person1.setName("John");
person1.setAge(25);
person1.describe(); // Output: John is 25 years old.
