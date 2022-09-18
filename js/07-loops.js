/* 
LOOP: for, while, for-of, foreach,...
OBJECT-LOOP: for-in
*/

/* const pazymiai = [10, 2, 8, 4, 6, 8];
let suma = 0;

const pazymiuKiekis = pazymiai.length;
let pazymiuSuma = 0;

pazymiuSuma += pazymiai[0];
pazymiuSuma += pazymiai[1];
pazymiuSuma += pazymiai[2];
pazymiuSuma += pazymiai[3];
pazymiuSuma += pazymiai[4];
pazymiuSuma += pazymiai[5];
// pazymiuSuma += pazymiai[6]; <-- šias užrašius nustotų veikti
// pazymiuSuma += pazymiai[7]; <-- šias užrašius nustotų veikti

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis); */

/* // Alternatyva:
let index = 0;
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis); */

const pazymiai = [10, 2, 8, 4, 6, 8];

// FOR
console.log('-------------------');
let sumaFor = 0;
for (let i1 = 0; i1 < pazymiai.length; i1++) {
    const pazymys = pazymiai[i1];
    sumaFor += pazymys;
    console.log(`${i1}) pažymys ${pazymys} [${sumaFor}]`);
}

// WHILE
console.log('-------------------');
let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;
    console.log(`${i2}) pažymys ${pazymys} [${sumaWhile}]`);
    i2++;
}

// FOR-OF
console.log('-------------------');
let sumaForOf = 0;
let i3 = 0;
for (const pazymys of pazymiai) {
    sumaForOf += pazymys;
    console.log(`${i3++}) pažymys ${pazymys} [${sumaForOf}]`);
}

// FOREACH
console.log('-------------------');
let sumaForEach = 0;
pazymiai.forEach((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4}) pažymys ${pazymys} [${sumaForEach}]`);
});
