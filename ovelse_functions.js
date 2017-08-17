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

function add1(tal1, tal2) {
    console.log(tal1 + tal2);
}

add1(3, 5);

var result = 0;
function add(tal) {
    // result = result + tal;    der er en nemmere måde at skrive dette på: result += tal;
    result += tal;
    console.log(result);
}

function sub(tal) {
    result -= tal;
    console.log(result);
}

add(8);
add(5);
sub(3);

// Anonyme functioner
// Anonym funktion
var sayHeyAnonym = function (value) {
    console.log(value); // Udskriver "test af anonym function"
}

sayHeyAnonym('test af anonym funktion');

