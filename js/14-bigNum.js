/*
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
            1. rezultatas: "Pateiktas sąrašas negali būti tuščias."

/* // 4 Mano sprendimas
function didziausiasSkaiciusSarase(array) {
    if (typeof array !== []) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
}

console.log(Math.max(...[1, 2, 3, 69])); */

function bigNum(list) {
    // VALIDATION
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas';
    }
    if (list.length === 0) {
        return 'ERROR: sąrašas negali būti tuščias';
    }
    // LOGIC
    let biggestNumber = -Infinity;
    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        // INNER VALIDATION
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        // INNER LOGIC
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }
    // RESULT VALIDATION
    if (biggestNumber === -Infinity) {
        return 'ERROR: sąraše nėra nei vieno normalaus skaičiaus.';
    }
    // RESULT RETURN
    return biggestNumber;
}

console.log(bigNum('pomidoras'), '-->', 'ERROR.');
console.log(bigNum([]), '-->', 'ERROR');
console.log(bigNum(['x']), '-->', 'ERROR');
console.log(bigNum(['x', true, [], -Infinity, NaN, Infinity]), '-->', 'ERROR');

console.log(bigNum([5]), '-->', 5);
console.log(bigNum([1, 2, 3]), '-->', 3);
console.log(bigNum([1, 3, 2]), '-->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '-->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '-->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);

console.log(bigNum([1, 2, 3, 'x']), '-->', 3);
console.log(bigNum([1, 2, 'x', 3]), '-->', 3);
console.log(bigNum([1, 'x', 2, 3]), '-->', 3);
console.log(bigNum(['x', 1, 2, 3]), '-->', 3);
console.log(bigNum([true, -1]), '-->', -1);
