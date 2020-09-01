type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {  // -> Type Guards - primitive types - typeof
        return a.toString() + b.toString();
    }
    return a + b;
}

//

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type UnknownedEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownedEmployee) {
    console.log('Name: ' + emp.name);

    // if (typeof emp === 'object')
    // if (typeof emp === 'Employee')  // JavaScript does not know this type
    if ('privileges' in emp) {  // Type Guards - custom types - in
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInfo({ name: 'alex', startDate: new Date()});

//

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {  // Type Guards - Classes - instanceof
        vehicle.loadCargo(100);
    }
}

useVehicle(v2);