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
// Anonym function
// Gammel måde at skrive functioner på
var sayHeyAnonym = function (value) {
    console.log(value); // Udskriver "test af anonym function"
}

sayHeyAnonym('test af anonym funktion');

// Anden måde at skrive functioner på
var sayHeyAnonym = (value) => {  // Erstat order "function" med en pil: => og hvis man kun har 1 argument, behøver man ikke at skrive "()"
    console.log(value); // Udskriver "test af anonym function"
}

sayHeyAnonym('test af anonym funktion');

// Ny måde at skrive functioner på
var sayWhat = value => console.log(value); 

sayWhat('test af anonym funktion');

// Arguments og default-values
function add(x = 0, y = 0) {
    console.log(`x er lig med ${x} og y=${y}. Sum: `, x + y);
}
 
add(); //Udskriver "x er lig med 0 og y=0. Sum:  0"
add(3, 8); //Udskriver "x er lig med 3 og y=8. Sum:  11"

// Øvelse 2

var langTekt = "Dette er en meget lang tekst som skal afkortes ved hjælp af en function som jeg skriver nedenfor";

function afkortstreng(tekst) {
    return tekst.substr(0, 28); // .substr() er det samme som at skrive .substring()

    // return tekst.substring(0, 28); .substr() er det samme som at skrive .substring()

    // return tekst;
}

console.log(afkortstreng(langTekt));

// Øvelse 3
// Argumenter kan være af typen array

var dato = new Date();
var birthday = new Date("21/04/95");
var idol = ["Timm", "Jensen", 1995];
var profil = function (p) {
    return p[0] + " " + p[1] + "\n : Født " + p[2]; // Returnerer tekst-strengen "Timm Jensen: Født 1995"
}

console.log(dato.getFullYear() - birthday.getFullYear()); // Udskriver alder.
console.log(profil(idol)); // Udskriver "Timm Jensen: Født 1995"

// Selv øvelse: Opret en function, som fortæller hvor langt tid der er tilbage til juleaften.


// Calculator - functions in a function
function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result  -= x;
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator();
calc.add(2);
calc.add(5);
calc.add(3);
calc.sub(4);
console.log(calc.result());