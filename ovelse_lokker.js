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