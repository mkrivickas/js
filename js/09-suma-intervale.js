// Ciklo for panaudojimas
/* 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    a. 0 ...0
    b. 0 ...4
    c. 0 ...100
    d. 574 ...815
    e. -50 ...50
    f. -70 ...30 */

function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumaIntervale(0, 0), '-->', 0);
console.log(sumaIntervale(0, 1), '-->', 1);
console.log(sumaIntervale(0, 2), '-->', 3);
console.log(sumaIntervale(0, 3), '-->', 6);

console.log(sumaIntervale(10, 14), '-->', 60);

console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(574, 815), '-->', 168069);
console.log(sumaIntervale(-50, 50), '-->', 0);
console.log(sumaIntervale(-70, 30), '-->', -2020);

/* 2. Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
    a. pvz.: "abcdef" -> "fedcba" */

/* 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    a. 0 - 11
    b. 8 - 31
    c. -18 - 18
    d. rezultatą pateikti tokiu formatu:
        i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
        ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai. 
        iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
        */
