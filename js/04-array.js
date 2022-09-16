/*
ARRAY
- pozicijos prasideda nuliu
- pozicijos tik sveikieji skaičiai
- ilgis / įrašų kiekis masyve -> .length
*/

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pažymiai:', pazymiai);

// koks pirmas
// koks paskutinis
// pažymių kiekis
// pažymių vidurkis

console.log('Pirmas:', pazymiai[0]); // Pirmas: 10
console.log('Antras:', pazymiai[1]); // Antras: 2
console.log('Trečias:', pazymiai[2]); // Trečias: 8
console.log('Trečias:', pazymiai[1.5]); // Trečias: undefined
console.log('Paskutinis:', pazymiai[4]); // Paskutinis: 6 <-- tiesiog pasisekė, kol nekeistas masyvas

const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis - 1;
console.log('Paskutinis:', pazymiai[paskutinioPozicija]);
console.log('Paskutinis:', pazymiai[pazymiai.length - 1]);

// masyvas -> ilgis -> paskutinio pozicija
// [1] -> 1 -> 0
// [1, 2] -> 2 -> 1
// [1, 2, -6] -> 3 -> 2
// [1, 2, -6, 13] -> 4 -> 3

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona', 'Gertrūda', 'Aloyzas'];
console.log(studentai);

let index = 0;
console.log(`Čia yra: ${studentai[index++]}.`);
console.log(`Čia yra: ${studentai[index++]}.`);
console.log(`Čia yra: ${studentai[index++]}.`);
console.log(`Čia yra: ${studentai[index++]}.`);
console.log(`Čia yra: ${studentai[index++]}.`);
console.log(`Čia yra: ${studentai[index++]}.`);
