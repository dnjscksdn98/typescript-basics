interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    constructor(public name: string) {
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const person = new Person('alex');
person.greet('Hi');