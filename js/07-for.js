/* 
LOOP: for, while, for-in, for-of, foreach,...
*/

const pazymiai = [10, 2, 8, 4, 6, 8];
let suma = 0;

/* const pazymiuKiekis = pazymiai.length;
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

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    suma += pazymys;

    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);
