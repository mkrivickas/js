/*
KINTAMIEJI

Iniciavimo būdas:
const - default iniciavimo budas nuo 2015.
let - antrinis budas inicijuoti, kai zinome, jog reiksme tures keistis.
var - pats seniausias ir geriau niekada nenaudoti, jei rupi saugumas.

Duomenų tipas: 
- number (skaicius) 
- string (tekstas)
- boolean (logine reiksme: true | false)
-array (masyvas, sarasas, matrica*)
*/

/*
const myLuckyNumberIs = 7;
console.log('Lucky number:', myLuckyNumberIs);

let pinigine = 0;
console.log('Pinigine:', pinigine);

pinigine = 5;
console.log('Pinigine:', pinigine);

pinigine = 10;
console.log('Pinigine:', pinigine);

const vardas = 'Maryte';
const pasisveikinimas = 'Laba diena, ' + vardas + '.';
console.log(pasisveikinimas);

const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku = true;

console.log('Ar meluoja?', arMeluojaDelVaiku);
console.log('Ar vedęs?', arVedes);
console.log('Turi vaikų?', arTuriVaiku);

console.log(2 + 2 * 2);
console.log('2 + 2 * 2');

console.log(true, false);
console.log('true', 'false');

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai:', pazymiai);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

const booleanList = [true, false, true, false, true, false];
console.log(booleanList);

const random = [1, 'a', true, []];
console.log(random);
*/

/*
NAMŲ DARBAI pgl. Rimanto Belovo 35 grupes 27 pamoką:
*/

// KINTAMUJU INICIAVIMAS

// 1
const one = 1;
const two = 2;
const three = 3;

console.log(one, two, three);

// 2
const firstName = 'Mindaugas';
const surname = 'Krivickas';
const age = '42';

console.log(firstName, surname, age);

// 3
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const ages = [42, 43, 44, 45, 10];
console.log(ages);
const temperatures = [10, 20, 30, 40, 50];
console.log(temperatures);

// 4
const draugai = ['Gytaute', 'Arvydas', 'Arnas', 'Marius', 'Morta'];
console.log(draugai);
const amzius = ['35', '45', '42', '40', '25'];
console.log(amzius);
const gyvunai = ['kate', 'suo', 'triusis', 'vilkas', 'ozka'];
console.log(gyvunai);

// VEIKSMAI SU KINTAMAISIAIS

// 1
let sum = one + two + three;
console.log(sum);

// 2
let prisistatymas =
    'Mano vardas - ' +
    firstName +
    ' ' +
    surname +
    '. Man yra ' +
    age +
    ' metai.';

console.log(prisistatymas);

// 3
console.log([numbers[0] - numbers[1] + numbers[2] - numbers[3] + numbers[4]]);
console.log([ages[0] - ages[1] + ages[2] - ages[3] + ages[4]]);
console.log([
    temperatures[0] -
        temperatures[1] +
        temperatures[2] -
        temperatures[3] +
        temperatures[4],
]);

// 4
console.log(draugai.reverse());
console.log(amzius.reverse());
console.log(gyvunai.reverse());
