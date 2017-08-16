// if statement && if - else statement
var response = true;

if (response) {
    console.log("Kodeblokken udføres");
} else {
    console.log("kodeblokken udføres, hvis if === false")
}

var navn = "hans";

if (navn == "hans"){
    console.log("Velkommen, " + navn)
} else if (navn == "egon"){
    console.log("Du har desværre ikke adgang, " + navn)
}

// switch - case
var name = "Egon";

switch (name) {
    case "Egon":
        console.log('Han har en plan');
        break;
    case "Finn":
        console.log('Ønsker medvind på cykelstierne');
        break;
    case "Georg":
        console.log('Får en lys ide');
        break;
    case "Hjælper":
        console.log(' er lille');
        break;
    default:
        console.log('ukendt');
        break;
}

// Øvelse 1
var sandtFalsk = false;

if(sandtFalsk == true){
    console.log("Hej verden");
}

// Øvelse 2
var verdi = 2;

console.log(verdi);

if (verdi > 5){
    console.log("Højere end 5")
} else {
    console.log("lavere end 5");
}

// Øvelse 3
var nummer = 6;
var udskriv = nummer > 5 ? "Højere end 5" : "lavere end 5";
console.log(udskriv);

// Øvelse 4

var leskedrik = "fanta";

if(leskedrik == "coke"){
    console.log("Yum Yum");
} else if(leskedrik == "fanta"){
    console.log("Orange yum");
} else {
    console.log("EEEEEeeeewwww");
}

// Øvelse 5

var nyDrik = "fanta"

switch(nyDrik){
    case "coke":
    console.log("namme nam");
    break;
    case "fanta":
    console.log("yumme yumme");
    break;
    default:
    console.log("Aaaaaad");
    break;
}
// Øvelse 6
