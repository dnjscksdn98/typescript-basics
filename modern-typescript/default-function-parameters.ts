// 디폴트 함수 매개변수 - 매개변수 목록에서 뒤에서부터 나열
const add = (a: number, b: number = 1) => a + b;
console.log(add(5, 5));