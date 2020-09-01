// Generic Constraints - extends

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'alex' }, { age: 23 });
console.log(mergedObj.name, mergedObj.age);