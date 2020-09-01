function add(n1: number, n2: number) {
    return n1 + n2;  // 타입스크립트가 자동으로 반환 타입을 number 로 인식
    // return n1.toString() + n2.toString();  // 타입스크립트가 자동으로 반환 타입을 string 으로 인식
}

// 명시적으로 반환 타입 고정
function mult(n1: number, n2: number): number {
    return n1 * n2;
}

// 반환 타입 - void
function printResult(num: number): void {
    console.log(`Result: ${num}`);
}

printResult(mult(5, 5));

// Function as Types

// let combinedValues;  // 문제 - any 타입이므로 다른 타입도 올 수 있음
// let combinedValues: Function;  // Function 타입으로 지정, 문제 - 다른 함수도 올 수 있음
// (매개변수) => 반환타입
let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = printResult;  // ERROR
console.log(combinedValues(5, 5));

// Funtion types & Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// 무명 함수
addAndHandle(10, 20, (result) => { 
    console.log(result);
});