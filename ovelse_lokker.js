// Løkker del 1

var tal = 0;
do {
    console.log(`Dit nummer er: ${tal}`);
    tal++;
} while (tal <= 10);

// øvelse 2

for (var i = 1;i <= 25;i++) {
    console.log(`i = ${i}`);
};

var x = 1;
while (x <= 25){
    console.log(`x = ${x}`);
    x++;
}

var y = 1;
do {
    console.log(`y = ${y}`);
    y++;
} while (y <= 25);


// øvelse 3
var i = new Date(1/1/2017);
for (;i >= 1917;i--) {
    console.log(i);
};

// Løkker del 2

// Øvelse 1
var mitArray = ["Hans", "Bo", "Blackman", "Mamboking", "Jørgen", "Egon", "Ida", "Sarah"];
mitArray.forEach(function(element) {
    console.log(element);
});

// Øvelse 2
var arrayy = ["Snib","snab","snude","kat"];
arrayy.forEach(function(element, index) {
    console.log(index + " " + element);
});

// Øvelse 3
var talArray = [199,3,22,41,53,36,27,82,900,20];
talArray.forEach(function(element, index) {
    if (element + 1 >= talArray.length && element >= talArray[index + 1]){
        console.log("Tallet er større eller lig med");
    } else {
        console.log("Tallet er mindre eller lig med");
    }
});