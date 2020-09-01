// Discriminated Unions

interface Bird {
    type: 'bird';  // Common Property - Literal types
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function move(animal: Animal) {
    let speed;
    
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}

move({ type: 'horse', runningSpeed: 100});