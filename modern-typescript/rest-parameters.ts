// 들어오는 모든 값들 Array 로 변환
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addNumbers = add(1, 2, 3, 4, 5);
console.log(addNumbers);

// 타입을 튜플 형태로 지정 가능
const mult = (...numbers: [number, number, number]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult * curValue;
    }, 1);
};

const multNumbers = mult(5, 5, 5);
console.log(multNumbers);