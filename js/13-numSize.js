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

4. Funkcija pavadinimu "didziausiasSkaiciusSarase":
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą "Pateikta netinkamo tipo reikšmė."
    c. jei sąrašas yra tuščias, tai išveda pranešimą "Pateiktas sąrašas negali būti tuščias."
    d. priešingu atveju, funkcija tęsia darbą
    e. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
    f. grąžina didžiausią surastą skaičių
    g. TESTAI:
        i. console.log(didziausiasSkaiciusSarase([1]));
            1. rezultatas: 1
        ii. console.log(didziausiasSkaiciusSarase([1, 2, 3]));
            1. rezultatas: 3
        iii. console.log(numSize([-5, 78, 14, 0, 18]));
            1. rezultatas: 78
        iv. console.log(numSize([69, 69, 69, 69, 66]));
            1. rezultatas: 69
        v. console.log(numSize([-1, -2, -3, -4, -5, -6, -7, -8]));
            1. rezultatas: -1
        vi. console.log(didziausiasSkaiciusSarase("pomidoras"));
            1. rezultatas: "Pateikta netinkamo tipo reikšmė."
        vii. console.log(numSize([]));
            1. rezultatas: "Pateikta netinkamo tipo reikšmė."

5. Funkcija pavadinimu "isrinktiRaides":
    a. priima du kintamuosius:
        i. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį;
        ii. antrasis nurudo kas kelintą raidę išrinkti.
    b. patikrinti ar pirmasis kintamasis yra teksto tipo */

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

/* // 4
function didziausiasSkaiciusSarase(array) {
    if (typeof array !== []) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
}

console.log(Math.max(...[1, 2, 3, 69])); */

// 3 Belovo sprendimas
function numSize(num) {
    if (typeof num !== 'number') {
        return 'ERROR: netinkamas tipas';
    }
    return 1;
}

console.log(numSize(5), '-->', 1);
console.log(numSize(true), '-->', 'ERROR.');
console.log(numSize('asd'), '-->', 'ERROR.');
console.log(numSize(NaN), '-->', 'ERROR.');

console.log(numSize(781), '-->', 3);
console.log(numSize(37060123456), '-->', 11);
