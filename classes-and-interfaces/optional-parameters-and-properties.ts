interface Named {
    readonly name: string;
    ouputName?: string;  // Interface Optional Properties - 있어도 되고 없어도 됨
}

class Person {
    name?: string;  // Class Optional Properties

    constructor(n?: string) {  // Function Optional Parameters
        if (n) {
            this.name = n;
        }
    }
}