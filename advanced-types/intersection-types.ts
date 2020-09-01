type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;  // Intersection Types

const e1: ElevatedEmployee = {
    name: 'alex',
    privileges: ['create-server'],
    startDate: new Date()
};

//

interface Admin2 {
    name: string;
    privileges: string[];
}

interface Employee2 {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee2 extends Admin2, Employee2 {}