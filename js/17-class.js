/* 
CLASS: savybių ir metodų junginys/grupė.
Savybės - kintamieji (info);
Metodai - funkcionalumas;

Klasės - receptūra;
Objektas - pagal receptūrą pagamintas konkretus patiekalas;
*/

/* function average(list) {
    let sum = 0;
    for (const item of list) {
        sum += item;
    }
    return sum / list.length;
}

const rez1 = average([10, 2, 8, 4]);
console.log(rez1);

const rez2 = average([2, 4, 8, 10, 10, 10, 10]);
console.log(rez2); */

class Bankomatas {
    constructor(street, color) {
        this.street = street;
        this.color = color;
        this.turnedOn = false;
        this.money = 0;
    }

    switchOn() {
        this.turnedOn = true;
        console.log(`${this.street}: bankomatas įjungtas`);
    }

    switchOff() {
        this.turnedOn = false;
        console.log(`${this.street}: bankomatas išjungtas`);
    }

    cashIn(money) {
        // jei neįjungtas - ERROR
        // jei nenormalus skaičius - ERROR
        // įskaičiuojam pinigus

        if (!this.turnedOn) {
            console.log(this.street, 'Panašu, kad nėra elektros...⚡️⚡️⚡️');
            return;
        }
        if (typeof money !== 'number') {
            console.log(this.street, 'Nepanašu į tikrą pinigą 😡');
            return;
        }
        if (money <= 0) {
            console.log(this.street, 'Minusinių pinigų nebūna 😡');
            return;
        }
        this.money += money;
        console.log(`${this.street}: įnešta ${money} pinigų.`);
    }

    cashOut(money) {
        if (!this.turnedOn) {
            console.log(this.street, 'Panašu, kad nėra elektros...⚡️⚡️⚡️');
            return;
        }
        if (typeof money !== 'number') {
            console.log(this.street, 'Nepanašu į tikrą pinigą 😡');
            return;
        }
        if (money <= 0) {
            console.log(this.street, 'Minusinių pinigų nebūna 😡');
            return;
        }
        if (this.money < money) {
            console.log(this.street, 'Bankomate šiuo metu nėra tokios sumos🥲');
            return;
        }
        this.money -= money;
        console.log(`${this.street}: išgryninta ${money} pinigų.`);
    }
    status() {
        console.log(
            `${this.street}: šiuo metu pinigų likutis yra ${this.money}`
        );
    }
}

const bankomatas1 = new Bankomatas('Didžioji g. 2', 'red');
const bankomatas2 = new Bankomatas('Mažoji g. 3', 'blue');

bankomatas1.switchOn();
bankomatas2.switchOn();

bankomatas1.cashIn(true);
bankomatas1.cashIn(5);
bankomatas2.cashIn(777);
bankomatas1.cashIn(5);
bankomatas1.cashIn(5);
bankomatas2.cashIn(3);

bankomatas1.cashOut(9);
bankomatas2.cashOut(9);
bankomatas1.cashOut(9);
bankomatas2.cashOut(9);

console.log(bankomatas1.money);
console.log(bankomatas2.money);

bankomatas1.status();
bankomatas2.status();
