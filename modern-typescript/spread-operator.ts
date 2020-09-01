const hobbies = ['sports', 'programming'];
const activeHobbies = ['hiking'];
// const activeHobbies = ['hiking', ...hobbies];

// object or array
// ... -> object 혹은 array 의 값들을 추출
activeHobbies.push(...hobbies);

console.log(activeHobbies);

// Object 복제하기

const person = {
    name: 'alex',
    age: 23
};

const copiedPerson = { ...person };
console.log(copiedPerson);