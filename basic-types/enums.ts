// enum - 레이블을 숫자 형태로 저장
enum Role { ADMIN, READ_ONLY, AUTHOR };
// 직접 숫자 지정 가능
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: 'alex',
    age: 23,
    hobbies: ['programming', 'working'],
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('Is Admin');
}