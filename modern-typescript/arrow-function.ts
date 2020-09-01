// 화살표 함수
// (매개변수 목록) => {함수 BODY}
const add = (a: number, b: number) => {
    return a + b;
};

console.log(add(2, 2));

// 한줄 화살표 함수
// {}, return 생략 가능
const mult = (a: number, b: number) => a * b;
console.log(mult(5, 5));

// 하나의 매개변수를 가질 경우
// 매개변수: 데이터타입 => 반환타입 => 매개변수명 => 함수 BODY
const printOuput: (a: number | string) => void = output => console.log(output);
console.log(add(10, 10));
