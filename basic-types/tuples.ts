const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]  // 튜플 타입으로 지정 -  첫번째 원소로는 number, 두번째 원소로는 string 만 가능, 그리고 두개의 원소로만 이루어지도록 설정
} = {
    name: 'alex',
    age: 23,
    hobbies: ['programming', 'working'],
    role: [2, 'author']
};

person.role.push('admin');  // 오류가 안나는 이유 - push() 작업은 튜플에도 적용 가능, 그러나 아래처럼 직접 대입은 불가능
// person.role[1] = 10;
// person.role = [0, 'admin', 'author'];
person.role = [0, 'admin'];  // 올바른 형식으로 대입하는 것은 가능

console.log(person);