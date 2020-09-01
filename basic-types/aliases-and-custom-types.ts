// type 타입명 = 타입
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

// Type Aliases & Object Types
type User = { name: string; age: number; };
const user1: User = { name: 'alex', age: 23 };
console.log(user1);

// This allows you to avoid unnecessary repetition and manage types centrally

function greet(user: User) {
    console.log(`Hi ${user.name}`);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}