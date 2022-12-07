// - Знайти та вивести довижину настипних стрінгових значень

let str = 'hello world';
console.log(str.length);

let lor = 'lorem ipsum';
console.log(lor.length);

let javascriptIsCool = 'javascript is cool';
console.log(javascriptIsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
// , ,
let helloWorld = 'hello world';
console.log(helloWorld.toUpperCase());
let loremIpsum = 'lorem ipsum';
console.log(loremIpsum.toUpperCase());
let javascriptIsCool1 = 'javascript is cool';
console.log(javascriptIsCool1.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
let helloworld = 'HELLO WORLD';
console.log(helloworld.toLowerCase());

let loremipsu = 'LOREM IPSUM';
console.log(loremipsu.toLowerCase());

let javascriptiscool = 'JAVASCRIPT IS COOL';
console.log(javascriptiscool.toLowerCase());


// - Є "брудна" стрінга  . Почистити її від зайвих пробілів.
let str4 = ' dirty string   '
console.log(str4.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
// ; ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stra = 'Ревуть воли як ясла повні';
let strings = stra.split(' ');
console.log(strings);

// - є масив чисел  . за допомоги map та колбеку перетворити всі об'єкти
// в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let strings1 = numbers.map(value => value.toString());
// let strings1 = numbers.map(value =>String(value));
let strings1 = numbers.map(value => value + '');
console.log(strings1);

// - створити функцію , яка прймає масив чисел, та сортує
// його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
const sortNums = (direction, nums) => {
  if (direction === 'ascending') {
    nums.sort((a, b) => a - b)
  } else if (direction === 'descending') {
    nums.sort((a, b) => b - a);
  }
  return nums;
}
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// - є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }
