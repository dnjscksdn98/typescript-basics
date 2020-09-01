abstract class Department {
    static fiscalYear = 2020;

    constructor(protected readonly id: string, public name: string) {
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;
}

class ITDepartment extends Department {
    private static instance: ITDepartment;

    private constructor(id: string, public admins: string[]) {
        super(id, 'IT Department');
    }

    describe() {
        console.log(`${this.name}: ${this.id}`);
    }

    static getInstance() {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment('a123', ['alex', 'park']);
        return this.instance;
    }
}

const itDept = ITDepartment.getInstance();
itDept.describe();