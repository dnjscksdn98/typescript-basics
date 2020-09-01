// Optional Chaining

const fetchedUser = {
    id: 'u123',
    name: 'alex',
    job: { title: 'CEO', description: 'My own company'}  // 만약 존재하는 지 확실치 않다면
};

console.log(fetchedUser?.job.title);  // typescript style
console.log(fetchedUser.job && fetchedUser.job.title)  // javascript style

//

const userInput = undefined;
const storedData = userInput ?? 'default';  // null or undefined
console.log(storedData);