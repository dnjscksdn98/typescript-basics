const user = {
    name: 'alex',
    age: 23,
    hobbies: ['sports', 'programming']  // string 타입만 있으므로 string array 로 타입을 인식
};

let favoriteActivities: string[];  // string array로 타입 고정
favoriteActivities = ['working', 'swimming'];

let books: any[];  // 어떠한 타입이든지 올 수 있음
books = ['harry potter', 7];

console.log(user.hobbies);

for (const hobby of user.hobbies) {
    console.log(hobby);
    console.log(hobby.toUpperCase());  // string 으로 인식하고 있으므로 string 전용 내장 함수 사용 가능
}