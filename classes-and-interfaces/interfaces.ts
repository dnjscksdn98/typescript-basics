interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user: Person;
user = {
    name: 'alex',
    age: 23,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
};

user.greet('Hi');