// 선언시 변수명이랑 데이터 타입 고정 가능
const personInfo: {
    name: string;
    age: number;
} = {
    name: 'alex',
    age: 23
};

// 바로 생성 가능 - 이 방법을 더 추천
const personInfo2 = {
    name: 'alex',
    age: 23
};

console.log(personInfo.name);
console.log(personInfo2.name);

// 중첩 방식
const product = {
    id: '1234',
    price: 12.09,
    details: {
        title: 'Red carpet',
        description: 'A great carpet.'
    }
};