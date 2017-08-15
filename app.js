console.log("Hej stuff!");

var antal = 5;
var prisPerStyk = 10;
var pris = antal * 10;

console.log('Prisen per styk er '+ prisPerStyk + " kr.");

// Variabler
// Øvelse 1
var navn = "Benny";
var alder = 19;
var tekst = `Mit navn er ${navn} og jeg er ${alder} år gammel`;

console.log(tekst);

// Øvelse 2
var moms = 1.25;
var pris_uden_moms = 400;

var pris_med_moms = moms * pris_uden_moms;
var pris_uden_moms_02 = pris_med_moms / moms;

console.log(pris_uden_moms_02);

// Øvelse 3

var forste = 10;
var anden = 20;

anden = anden - forste;
forste = anden + anden;

console.log(forste);
console.log(anden);

// Øvelse 4.1

var carName = "Volvo";

console.log(carName);

// Øvelse 4.2

var number = 50;

console.log(number);

// Øvelse 4.3

var carName = "Volvo";
console.log(carName);

// Øvelse 4.4

var x = 5;
var y = 10;
console.log(x + y);

// Øvelse 4.5

var z = x + y;

console.log(z);

// Øvelse 4.6

var firstName = "John", lastName = "Doe", age = 35;

// Arrays
// Øvelse 1.1

var cars = ["Saab", "Volvo", "BMW"];

console.log(cars);

// Øvelse 1.2

console.log(cars[1]);

// Øvelse 1.3

cars[0] = "Opel";
console.log(cars);

// Øvelse 1.4

console.log(cars.length);

// Øvelse 1.5

cars[cars.length] = "Mercedes";
console.log(cars);

// Arrays 2
// Arrays inden i et array ( multi-dimensionelle arrays)
// Øvelse 1, 2 & 3
var personer = [
    [holdA = "Timm", "Tue"], 
    [holdB = "Christian", "Tenna"], 
    [holdC = "Kasper", "Jake"]
]

console.log(personer);
console.log(personer.length);