/* 
OBJECT
*/

/* 
Mokiniai (array): 
    -mokinys (???):
        - vardas (string), 
        - pažymiai (array), 
        - kontaktinis asmuo (???):
            - vardas (string), 
            - telefonas (number), 
*/

/* // BLOGAS DUOMENŲ SAUGOJIMO BŪDAS
const students = ['Petras', 'Marytė', 'Jonas', 'Ona'];
const marks = [
    [10, 8],
    [10, 7, 4],
    [10, 6],
    [10, 5],
];
const contactName = ['P.P.', 'M.M.', 'J.J.', 'O.O.'];
const contactPhone = [111, 222, 333, 444];

const studentIndex = 2;

console.log('Vardas:', students[studentIndex]);
console.log('Pažymiai:', marks[studentIndex]);
console.log('Kontaktinio asmens vardas:', contactName[studentIndex]);
console.log('Kontaktinio asmens tel.:', contactPhone[studentIndex]); */

/* // TINKAMESNIS SAUGOJIMO BŪDAS
const students = [
    ['Petras', [10, 6], ['P.P.', 111]],
    ['Marytė', [10, 7], ['M.M.', 222]],
    ['Jonas', [10, 8, 9], ['J.J.', 333]],
    ['Ona', [10, 9], ['O.O.', 444]],
];

const index = 1;
const student = students[index];
const studentName = student[0];
const studentMarks = student[1];
const studentContactPerson = student[2];
const contactName = studentContactPerson[0];
const contactPhone = studentContactPerson[1];

console.log('Student name:', studentName);
console.log('Marks:', studentMarks);
console.log('Contact name:', contactName);
console.log('Contact phone:', contactPhone); */

// GERIAUSIAS SAUGOJIMO BŪDAS
const students = [
    {
        name: 'Petras',
        marks: [10, 6],
        contact: {
            name: 'P.P.',
            phone: 111,
            address: {
                city: 'Vilnius',
                street: 'Street',
            },
        },
    },
    {
        name: 'Marytė',
        marks: [10, 7],
        contact: {
            name: 'M.M.',
            phone: 222,
            address: {
                city: 'Vilnius',
                street: 'Street',
            },
        },
    },
    {
        name: 'Jonas',
        marks: [10, 8],
        contact: {
            name: 'J.J.',
            phone: 333,
            address: {
                city: 'Vilnius',
                street: 'Street',
            },
        },
    },
    {
        name: 'Ona',
        marks: [10, 9],
        contact: {
            name: 'P.P.',
            phone: 444,
            address: {
                city: 'Vilnius',
                street: 'Street',
            },
        },
    },
];

const studentIndex = 3;
const student = students[studentIndex];
const name = student.name;
const marks = student.marks;
const contactName = student.contact.name;
const contactPhone = student.contact.phone;
const contactCity = student.contact.address.city;

console.log(name);
console.log(marks);
console.log(contactName);
console.log(contactPhone);
console.log(contactCity);
