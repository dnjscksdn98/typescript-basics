// 1. Array Destructuring
const hobbies = ['programming', 'hiking'];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);

// 2. Object Destructuring
const person = {
    firstName: 'alex',
    age: 23
};

// 추출시 변수명은 해당 Object의 값과 동일해야함
const { firstName, age } = person;
console.log(firstName, age);

// 추출시 다른 변수명 사용하기
const { firstName: userName, age: userAge } = person;
console.log(userName, userAge);