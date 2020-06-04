console.clear();
//  blocking [sync]
const sayHi = name => console.log(`Hello, ${name}`);
//This is the full function version of the above arrow function.
/*
function sayHi (name) {
    console.log("Hello, " = name);
}
sayHi(`Shaun`);
*/
sayHi('Shaun');
sayHi('Devon');
sayHi('Keval');

//  non-blocking [async]
setTimeout(sayHi, 2500, 'Michael');
setTimeout(sayHi, 3500, 'Gagandeep');
setTimeout(sayHi, 1500, 'Bob');
sayHi('Ilia');

//  Callback
const farewell = name => console.log(`Goodbye, ${name}`);
const greeting = (name, callback) => {
    console.log(`Hello, ${name}`);
    callback(name);
}

greeting('Shaun McKinnon', sayHi);