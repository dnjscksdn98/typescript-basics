// 접근 지정자 - private, public(default), protected

class Department {
    // static field - static field는 static method 에서만 접근 가능
    static fiscalYear = 2020;
    protected employees: string[] = [];

    // constructor(name: string) {
    //     this.name = name;
    // }

    // shortcut - 접근 지정자와 같이 사용할 경우 필드 자동 생성
    // readonly - 수정 불가
    constructor(protected readonly id: string, public name: string) {

    }

    // static method
    static createEmployee(name: string) {
        return { name: name };
    }

    // 메소드 선언
    // 해당 클래스의 속성을 참조하려면 this 키워드 사용하기
    describe(this: Department) {
        console.log(`ID: ${this.id}, Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(`${this.employees.length}: ${this.employees}`);
    }
}

// new 연산자를 통해서 객체 생성
const finance = new Department('123', 'Finance');
finance.describe();

finance.addEmployee('alex');
finance.addEmployee('kim');
finance.printEmployeeInfo();

// extends - 클래스 상속
class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'ITDepartment');  // super() - 부모 클래스의 생성자 호출
    }
}

const itDept = new ITDepartment('a307', ['alex', 'park', 'kim']);
console.log(itDept);

class AccountingDepartment extends Department {
    private lastReport: string;

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting Department');
        this.lastReport = reports[-1];
    }

    // overriding properties
    addEmployee(name: string) {
        if (name === 'alex') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    // getters & setters
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(text: string) {
        this.lastReport = text;
    }
}

const accountingDept = new AccountingDepartment('a438', ['good', 'bad']);
accountingDept.addEmployee('park');
accountingDept.printEmployeeInfo();

// 함수 형태로 실행하지 않음
accountingDept.mostRecentReport = 'soso';
console.log(accountingDept.mostRecentReport);

// static - 클래스 단위로 접근
const employee1 = Department.createEmployee('alex');
console.log(employee1);
console.log(Department.fiscalYear); 