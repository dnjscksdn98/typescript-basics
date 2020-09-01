// 추상 클래스
abstract class Department {
    static fiscalYear = 2020;

    constructor(protected readonly id: string, public name: string) {
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    // 추상 메소드
    abstract describe(this: Department): void;
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT Department');
    }

    describe() {
        console.log(`${this.name}: ${this.id}`);
    }
}

const itDept = new ITDepartment('a123', ['alex', 'park']);
itDept.describe();