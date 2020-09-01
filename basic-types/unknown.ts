let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'alex';
// userName = userInput;  // ERROR

// 타입 체크를 해야지만 unknown 타입 대입 가능
if (typeof userInput === 'string') {
    userName = userInput;
}