/* 3. Funkcija pavadinimu "numSize":
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą "Pateikta netinkamo tipo reikšmė."
    c. priešingu atveju, funkcija tęsia darbą
    d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    e. grąžina skaitmenų kiekį
    f. TESTAI: 
        i. console.log(numSize(5));
            1. rezultatas: 1
        ii. console.log(numSize(781));
            1. rezultatas: 3
        iii. console.log(numSize(37060123456));
            1. rezultatas: 11
        iv. console.log(numSize(true));
            1. rezultatas: "Pateikta netinkamo tipo reikšmė."
        v. console.log(numSize("asd"));
            1. rezultatas: "Pateikta netinkamo tipo reikšmė."
        vi. console.log(numSize(NaN));
            1. rezultatas: "Pateikta netinkamo tipo reikšmė."

/* // 3 Mano variantas
function numSize(num) {
    let check = /^-?[\d.]+(?:e-?\d+)?$/.test(num);
    if (check) {
        return num.toString().length;
    } else {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
}
console.log(numSize(NaN)); */

// 3 Belovo sprendimas
function numSize(num) {
    if (typeof num !== 'number' || !isFinite(num)) {
        return 'ERROR: netinkamas tipas';
    }
    const numAsString = '' + num;
    let size = numAsString.length;

    // nustatome ar skaičius yra dešimtainis (turi kablelį)
    if (num % 1 !== 0) {
        size--;
    }

    // jei skaičius neigiamas
    if (num < 0) {
        size--;
    }

    return size;
}

// console.log(numSize(true), '-->', 'ERROR.');
// console.log(numSize('asd'), '-->', 'ERROR.');
// console.log(numSize(NaN), '-->', 'ERROR.');
// console.log(numSize(Infinity), '-->', 'ERROR.');
// console.log(numSize(-Infinity), '-->', 'ERROR.');
// console.log(numSize([]), '-->', 'ERROR.');
// console.log(numSize([1]), '-->', 'ERROR.');
// console.log(numSize(), '-->', 'ERROR.');
// console.log(numSize(numSize), '-->', 'ERROR.');

// console.log(numSize(5), '-->', 1);
// console.log(numSize(781), '-->', 1);
// console.log(numSize(37060123456), '-->', 1);
// console.log(numSize(3.14), '-->', 3);
// console.log(numSize(2.727), '-->', 4);
// console.log(numSize(-5), '-->', 1);
// console.log(numSize(-5.745), '-->', 4);

console.log('EXTRA... (galvos skausmas');
console.log(numSize(0.000000000001), '-->', 13);
console.log(numSize(1000000000000000000000), '-->', 22);
