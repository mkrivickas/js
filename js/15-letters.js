/*
5. Funkcija pavadinimu "isrinktiRaides":
    a. priima du kintamuosius:
        i. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį;
        ii. antrasis nurudo kas kelintą raidę išrinkti.
    b. patikrinti ar pirmasis kintamasis yra teksto tipo:
        i. jei ne, išvedame pranešimą "Pirmasis kintamasis yra netinkamo tipo."
        ii. priešingu atveju tęsiame darbą
    c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
        i. jei ne, išvedame pranešimą "Pirmojo kintamojo reikšmė yra netinkamo dydžio."
*/

function letters(text, step) {
    // TEKSTAS
    if (typeof text !== 'string') {
        return 'ERROR: Tekstas yra netinkamo tipo.';
    }
    if (text === '') {
        return 'ERROR: Tekstas negali būti tuščias.';
    }
    // ŽINGSNIS
    if (typeof step !== 'number') {
        return 'ERROR: Žingsnis yra netinkamo tipo.';
    }
    if (!isFinite(step)) {
        return 'ERROR: žingsnis turi būti tikras skaičius.';
    }
    if (step % 1 !== 0) {
        return 'ERROR: žingsnis turi būti sveikasis skaičius.';
    }
    if (step === 0) {
        return 'ERROR: žingsnis negali būti lygus nuliui.';
    }
    if (step > text.length) {
        return 'ERROR: žingsnis negali būti didesnis už teksto ilgį.';
    }

    let raides = '';

    if (step > 0) {
        for (let i = step - 1; i < text.length; i += step) {
            const raide = text[i];
            raides += raide;
        }
    } else {
        for (let i = text.length + step; i >= 0; i += step) {
            const raide = text[i];
            raides += raide;
        }
    }

    return raides;
}

// console.log(letters(1561, 2), '-->', 'ERROR');
// console.log(letters('labas', 'iki'), '-->', 'ERROR');
// console.log(letters('labas', NaN), '-->', 'ERROR');
// console.log(letters('labas', -Infinity), '-->', 'ERROR');
// console.log(letters('labas', Infinity), '-->', 'ERROR');
// console.log(letters('labas', 1.111111), '-->', 'ERROR');
// console.log(letters('abc', 0), '-->', 'ERROR');
// console.log(letters('abc', 4), '-->', 'ERROR');
// console.log(letters('', 4), '-->', 'ERROR');

console.log(letters('abcdefg', 2), '-->', 'bdf');
console.log(letters('abcdefghijkl', 3), '-->', 'cfil');
console.log(letters('abcdefghijkl', 4), '-->', 'dhl');

console.log(letters('abcdefg', -2), '-->', 'x');
console.log(letters('abcdefghijkl', -3), '-->', 'x');
console.log(letters('abcdefghijkl', -4), '-->', 'x');
