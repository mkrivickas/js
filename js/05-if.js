/*
IF

Šablonai:
- if () {}
- if () {} else {}
- if () {} else if {}
- if () {} else if {} else {}
- if () {} else if {} ...else if {} else {}

Palyginimo operatoriai:
- visi: >, <, <=, >=, ==, !=, ===, !==
- naudotini: >, <, <=, >=, ===, !==
- NEnaudotini: ==, !=
*/

const a = 7;
const b = '7';

if (a === b) {
    console.log('A yra lygu B');
} else {
    console.log('A nėra lygu B');
}

console.log('------------------');

const day = 8;

if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('trečiadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
} else if (day === 6) {
    console.log('šeštadienis');
} else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena savaitėje neegzistuoja');
}

console.log('------------------');

const akiuSpalva = 'raudona';

if (akiuSpalva === 'žalia') {
    console.log('Žaliaakiai yra žalčiai!');
} else {
    if (akiuSpalva === 'mėlyna') {
        console.log('Mėlynakiai mėgsta mėlynes.');
    } else {
        if (akiuSpalva === 'ruda') {
            console.log('Rudaakiai yra melagiai.');
        } else {
            if (akiuSpalva === 'raudona') {
                console.log('Raudonakis?.. Tu turbūt programuotojas...');
            } else {
                console.log('O tu turi akis?..');
            }
        }
    }
}

console.log('------------------');

const temperatura = -25;
const nuoKadaLaikomeJogSilta = 15;
const arYraKrituliu = false;

if (arYraKrituliu) {
    // šiuo metu lyja
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Varyk su maike 🦈🦈');
    } else {
        console.log('Tau reikės kailinių 🎅');
    }
} else {
    // šiuo metu nelyja
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Gali eiti nuogas 🌞');
    } else {
        console.log('Be striukės neapsieisi ❄️');
    }
}
