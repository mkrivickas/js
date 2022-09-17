const pirmas = 7;
const antras = 5;

// įprasta funkcija
function suma(a, b) {
    return a + b;
}
const r1 = suma(pirmas, antras);
console.log(r1);

// kintamajam priskirta anoniminė funkcija
const atimtis = function (a, b) {
    return a - b;
};
const r2 = atimtis(pirmas, antras);
console.log(r2);

// arrow (rodyklinė) funkcija
const dalyba = (a, b) => {
    return a / b;
};
const r3 = dalyba(pirmas, antras);
console.log(r3);

// arrow (rodyklinė) funkcija
// jei logikos bloke {} yra tik 1 procedūra, tai galime nerašyti  {} ir return
const daugyba = (a, b) => a * b;
const r4 = daugyba(pirmas, antras);
console.log(r4);

// arrow (rodyklinė) funkcija
// jei parametrų bloke {} yra tik 1 parametras, tai galime nerašyti  ()
const kvadratu = (a) => a * a; // Prettier ištaiso skliaustelio nebuvimą
const r5 = kvadratu(pirmas);
console.log(r5);

const tekstas = 'Labas rytas';
const pirmaRaide = (s) => s[0];
console.log(pirmaRaide(tekstas));
