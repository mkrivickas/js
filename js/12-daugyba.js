// FUNKCIJOS

/*
Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus.

1. Funkcija pavadinimu "tusciaFunkcija":
    a. nepriima jokių kintamųjų
    b. neatlieka jokios vidinės logikos
    c. grąžina boolean tipo reikšmę "false"
    d. TESTAS:
        i. console.log(tusciaFunkcija());
        ii. rezultatas: false

2. Funkcija pavadinimu "daugyba":
    a. priima du skaičiaus tipo kintamuosius
    b. atskirame kintamajame įsimena sandaugos reikšmę
    c. grąžina sandaugos rezultatą
    d. TESTAI:
        i. console.log(daugyba(skaicius1, skaicius2));
        ii. console.log(daugyba(skaičius3, skaicius2));
        iii. console.log(daugyba(skaicius1, skaicius3));
        iv. rezultatas: teisingos reikšmės;

3. Funkcija pavadinimu "skaitmenuKiekisSkaiciuje":
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą "Pateikta netinkamo tipo reikšmė."
    c. priešingu atveju, funkcija tęsia darbą
    d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    e. grąžina skaitmenų kiekį
    f. TESTAI: 
        i. console.log(skaitmenuKiekisSkaiciuje(5));
            1. rezultatas: 1
        ii. console.log(skaitmenuKiekisSkaiciuje(781));
            1. rezultatas: 3
        iii. console.log(skaitmenuKiekisSkaiciuje(37060123456));
            1. rezultatas: 11
        iv. console.log(skaitmenuKiekisSkaiciuje(true));
            1. rezultatas: "Pateikta netinkamo tipo reikšmė."
        v. console.log(skaitmenuKiekisSkaiciuje("asd"));
            1. rezultatas: "Pateikta netinkamo tipo reikšmė."
        vi. console.log(skaitmenuKiekisSkaiciuje(NaN));
            1. rezultatas: "Pateikta netinkamo tipo reikšmė."

4. Funkcija pavadinimu "didziausiasSkaiciusSarase":
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą "Pateikta netinkamo tipo reikšmė."

*/

// 1
function daugyba(a, b) {
    // jei a nėra skaičius -> ERROR
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi būti skaičius';
    }
    if (isNaN(a)) {
        return 'ERROR: pirmas parametras turi būti skaičius';
    }
    // jei b nėra skaičius -> ERROR
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi būti skaičius';
    }
    if ('' + b === 'NaN') {
        return 'ERROR: antras parametras turi būti skaičius';
    }
    return a * b;
}

console.log('ERROR', '-->', daugyba(7.7, 'labas'));
console.log('ERROR', '-->', daugyba('labas', 5));
console.log('ERROR', '-->', daugyba(7.7, ''));
console.log('ERROR', '-->', daugyba('', 5));
console.log('ERROR', '-->', daugyba(7, true));
console.log('ERROR', '-->', daugyba(true, 5));
console.log('ERROR', '-->', daugyba(7, false));
console.log('ERROR', '-->', daugyba(false, 5));
console.log('ERROR', '-->', daugyba(7, []));
console.log('ERROR', '-->', daugyba([], 5));
console.log('ERROR', '-->', daugyba(7, [1, 2, 3]));
console.log('ERROR', '-->', daugyba([1, 2, 3], 5));
console.log(daugyba(7, NaN));
console.log(daugyba(NaN, 5));

console.log(daugyba(7, 5));
console.log(daugyba(-7, 5));
console.log(daugyba(-7, -5));
console.log(daugyba(7, -5));
console.log(daugyba(7.7, -5));
console.log(daugyba(7, Infinity));
console.log(daugyba(Infinity, 5));

/* // 3
function skaitmenuKiekisSkaiciuje(num) {
    let check = /^-?[\d.]+(?:e-?\d+)?$/.test(num);
    if (check) {
        return num.toString().length;
    } else {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
}
console.log(skaitmenuKiekisSkaiciuje(NaN)); */

/* // 4
function didziausiasSkaiciusSarase(array) {
    if (typeof array !== []) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
}

console.log(Math.max(...[1, 2, 3, 69])); */
