// Øvelse 1
var tal1 = 3;
var tal2 = 7;

console.log(tal1 + tal2);
console.log(tal1 - tal2);
console.log(tal1 * tal2);
console.log(tal1 / tal2);
console.log(tal1 % tal2);
console.log(++tal1);
console.log(tal1++);
console.log(tal1);

// Øvelse 2

var tal = 12;
var tel = 22;

tal += 5;
console.log(tal);

tal -= 5;
console.log(tal);

tel *= 2;
console.log(tel);

tel /= 2;
console.log(tel);

tal %= 122;
console.log(tal);

// Øvelse 3 & 4

var alder = 22;
var fodselsaar = 1995;

if (alder >= 18 || fodselsaar >= 1999){
    console.log("Congrats, you're old enough!");
} else {
    console.log("Sorry, but you're not old enough bud!");
}