// unions - | 를 사용해서 하나의 매개변수로 여러개의 타입을 전달 받을 수 있도록 지정

function combine(input1: number | string, input2: number | string) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('alex', 'kim');
console.log(combinedNames);