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