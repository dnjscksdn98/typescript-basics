// keyof - to make sure U is a property of T
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

// console.log(extractAndConvert({}, 'name'));  // ERROR
console.log(extractAndConvert({ name: 'alex' }, 'name'));