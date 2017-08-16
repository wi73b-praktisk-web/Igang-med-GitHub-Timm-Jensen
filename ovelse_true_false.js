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
  
    case "Hjælper":
        console.log(' er lille');
        break;
    default:
        console.log('ukendt');
        break;
}