# Igang-med-GitHub-Timm-Jensen

# Overskrift h1
## Overskrift h2
### Overskrift h3
#### Overskrift h4
##### Overskrift h5
###### Overskrift h6

Almindelig Tekst test test

Link til [Google](http://google.dk/)

"Console.log" Skriver til - i vores tilfælde - til browserens consol. Denne syntax er meget nyttig, ift. til at teste eks. hvor langt en funktion kører.  
````javascript
console.log("Hej stuff!");
document.write("Very big!");
````
````html
<h1> Stor overskrift </h1>
<p> Brødtekst </p>
````
````css
h1 {
    background-color: #123456;
}
p {
    color: rgb(255, 255, 255);
}
````

# Sådan opretter du et Repository 

````
Step 1.
Du starter med at trykke på '+' ikonet, oppe til højre på github, og vælger "Ny Repository".
```` 
````
Step 2.
Vælg den korrekte ejer og giv dit repository, et navn. 

OBS. Husk! at mellemrum IKKE er tilladt.
````
````
Step 3. (ikke nødvendig)

Giv dit repository en beskrivelse
````
````
Step 4.
Vælg om du vil have dit repository 'Privat' eller 'Offentlig'.
dvs. om andre folk har tilladelse til at se dit repository eller ej.
````
````
Step 5.
Hak af ved "giv dit repository en readme.md-fil", så du kan give dit repository en beskrivelse.
````
````
Step 6.
Vælg om du vil tilføje en 'gitignore' og en 'license'. Valget af disse 2 ting, kommer helt an på, hvilket dokument du laver og hvilke rettigheder, der er til din kode og eller lign.
````

Når alt er udfyldt, kan du trykke "Opret repository" og så er du færdig :-)


# if-else statement
## Øvelse 6 (True-false-opgaven)
Et 'if-else' statement kan man f.eks. bruge ved et input felt. dvs, hvis en bruger skal indtaste sin alder, da man skal være et hvis antal år gammel, for at kunne oprette sig.  i dette tilfælde kan vi lave et tjek sådan:

````javascript
Hvis brugerens alder er 16 år eller ældre, så modtager de beskeden "Du er gammel nok", hvis brugerens alder, derimod er under 16, så modtager de beskeden "Du skal være mindst 16 år gammel, for at kunne oprette dig her".

var alder = 15;

if(alder > 16){
    console.log("Du er gammel nok");
} else {
    console.log("Du skal være mindst 16 år gammel, for at kunne oprette dig her");
}
````

## Tegn og deres betydning

Bool / Boolean = True/False
String = "Sætninger"
Int / Integer = Tal som 1, 2, 3 osv.

=  Erstatter det indhold som skulle være i en variablel

== er en sammenlignings-operator (Er lig med)

=== fungere på samme måde som '==' men med 3 === tjekker den også for om den er samme datatype.

!= betyder hvis IKKE lig med.

!== Betyder 'er ikke lig med' og 'ikke samme datatype
> betyder Større end...

< betyder Mindre end...

>= betyder større end eller er lig med...

<= betyder mindre end eller er lig med...

? er en 'Ternary Operator' det er en "3-delt" operator, som bruges f.eks. ved: Betingelsen : Sand / Falsk

&&  Betyder egentlig bare 'Og'. Det er JavaScripts svar på og-tegn
|| er en 'Eller' Operator. Bruges hvis en betingelse, skal endten det ene eller det andet.

! Er en "IKKE" operator.

````javascript
var navn = "test";

if(navn == "test"){
    Run code
}

var tal = 3;
if(tal === 3){
    Run Code
}

if(tal != 3){
    Run Code
}
````

# For, While & Do-While

En For-løkke, er en løkke som kører et hvis antal gange, hvis der er sat en ende på.

Eksempel:
```javascript
for (statement 1; statement 2; statement 3) {
    Code der bliver kørt
}
```

En While-løkke, er en løkke som kører, så længe at argumentet er lig med sandt. Hvis at argumentet bliver falsk, stopper løkken med at kører.

Eksempel:
```javascript
while (true) {
    Code er bliver kørt
}
```

En Do-While-løkke, den præcis som en almindelig 'while-løkke', det eneste der er til forskel, er at den kører en kode, før while-løkken igangsættes.

Eksempel:
```javascript
do {
    Kode som bliver kørt
}
while(argument);
```


NPM = Node package Manager (terminal: npm init) npm kan installeres globalt og lokalt.

Globalt = Gælder alle fremtidige projekter. (eksempel: npm install nodemon --global eller -G) Global installeres i ens system.

Lokalt = Gælder KUN det pågældende projekt. (eksempel: npm install nodemon --save eller -S) lokalt bliver kun installeret i den pågældende projektmappe.