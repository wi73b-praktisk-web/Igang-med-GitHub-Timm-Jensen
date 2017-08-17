hello(); // 

function hello() {
    console.log("Helloooooooo");
}


function sayHello(who) { // Who er et argument
    console.log('hello', who);
}

sayHello('hoisting'); // Udskriver "hello hoisting"
sayHello('me'); // Udskriver "hello me"


// Hoisting virker ikke altid.

var sayHey = function sayHey(value) {
    console.log(value);
}
sayHey('test for hoisting?');


// Øvelse A

function udskriv(fornavn, efternavn, fodselsdag) {
    console.log(fornavn, efternavn, fodselsdag);
}

udskriv('Hans', 'hansen', 2000);


// Øvelse B