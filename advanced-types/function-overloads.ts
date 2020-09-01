// Function Overloads

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

// const result = add('alex', 'won') as string;  // type casting
// result.split(' ');  // ERROR - string 타입을 반환하는지 모름
// add function overloads

const result = add('alex', 'won');
result.split(' ');  // OK