/*
Visi mokiniai turi TIK 4 pažymius ir reikia suskaičiuoti vidurkį.
*/
const petras = [10, 10, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

/* let petroSuma = 0;
petroSuma += petras[0];
petroSuma += petras[1];
petroSuma += petras[2];
petroSuma += petras[3];
const petroKiekis = petras.length;
const petroVidurkis = petroSuma / petroKiekis;
console.log('Petras:', petroVidurkis);

let marytesSuma = 0;
marytesSuma += maryte[0];
marytesSuma += maryte[1];
marytesSuma += maryte[2];
marytesSuma += maryte[3];
const marytesKiekis = maryte.length;
const marytesVidurkis = marytesSuma / marytesKiekis;
console.log('Marytė:', marytesVidurkis);

let jonoSuma = 0;
jonoSuma += jonas[0];
jonoSuma += jonas[1];
jonoSuma += jonas[2];
jonoSuma += jonas[3];
const jonoKiekis = jonas.length;
const jonoVidurkis = jonoSuma / jonoKiekis;
console.log('Jonas:', jonoVidurkis);

let onosSuma = 0;
onosSuma += ona[0];
onosSuma += ona[1];
onosSuma += ona[2];
onosSuma += ona[3];
const onosKiekis = ona.length;
const onosVidurkis = onosSuma / onosKiekis;
console.log('Ona:', onosVidurkis); */

/* function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras:', petroVidurkis);
const marytesVidurkis = vidurkis(maryte);
console.log('Marytė:', marytesVidurkis);
const jonoVidurkis = vidurkis(jonas);
console.log('Jono:', jonoVidurkis);
const onosVidurkis = vidurkis(ona);
console.log('Ona:', onosVidurkis); */

/* 
Funkcija gauna vardą ir turi grąžinti sakinį:
"Vardo pirma raidė yra [V] ir vardas sudarytas iš 5 raidžių."
*/

function vardoAnalize(name) {
    return `Vardo "${name}" pirma raidė yra ${name[0]} ir vardas sudarytas iš ${name.length} raidžių.`;
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);
const marytesVardas = vardoAnalize('Marytė');
console.log(marytesVardas);
const aloyzoVardas = vardoAnalize('Aloyzas');
console.log(aloyzoVardas);
