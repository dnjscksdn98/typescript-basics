const names: Array<string> = [];  // string[]
const books: Array<string | number> = [];  // (string | number)[]

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
});

// custom generics

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'alex' }, { age: 23 });
console.log(mergedObj.name, mergedObj.age);

//

interface Lengthy {
    length: number;
}

// to make sure T has a length property
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'got no value...';
    if (element.length === 1) {
        description = 'got 1 element';
    }
    else if (element.length > 1) {
        description = `got ${element.length} elements`;
    }
    return [element, description];
}

console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe(['sports', 'programming']));
