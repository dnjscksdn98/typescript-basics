// const - 불변

const userName = 'alex';
// userName = 'kim';  // ERROR

// let - block scope
let age = 30;
age = 23;

if (age > 20) {
    let isOld = true;  // 해당 블록 내에서만 접근 가능
}

// console.log(isOld);  // ERROR