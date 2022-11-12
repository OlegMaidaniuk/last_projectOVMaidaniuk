// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 0;
// x = 1;
// x = 0;
// x =+'-3';
// if (x !== 0) {
//   console.log('вірно')
// } else (x === 0)
// {
//   console.log('Невірно')
// }
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = NaN;
// if (typeof time !== `number`) {
//   console.log(`вчи цифри "вумнік"`);
// } else if (time < 15 && time >= 0) {
//   console.log(1);
// } else if (time < 30 && time >= 15) {
//   console.log(2);
// } else if (time >= 30 && time < 45) {
//   console.log(3);
// } else if (time >= 45 && time <= 60) {
//   console.log(4);
// } else if (time < 0 || time > 60) {
//   console.log('mistake');
// }


//\\ - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let number = 3;
// number > 0 && number <= 10 ? console.log('first') :
//   number > 10 && number <= 20 ? console.log('second') :
//     number > 20 && number <= 31 ? console.log('third') : console.log(`mistake`);

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
// let numb = +prompt();
// switch (numb) {
//   case 1:
//     console.log('sunday');
//     break;
//   case 2:
//     console.log('monday');
//     break;
//   case 3:
//     console.log('tuesday');
//     break;
//   case 4:
//     console.log('wednesday');
//     break;
//   case 5:
//     console.log('thursday');
//     break;
//   case 6:
//     console.log('friday');
//     break;
//   case 7:
//     console.log('saturday');
//     break;
//   default:
//     console.log('error');
//
// }

//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a = '0';
// // let b = 0;
// let a = +prompt();
// let b = +prompt();
//
// if (a > b) {
//   console.log(a);
// }
// else if (b>a){
//   console.log(b);
// }
// else if(a === b)
// {
//   console.log('equality');
// }
// else {
//   console.log('error');
// }
//
// //
//   - є змінна х, яка може прийняти будь-яке значення
//   (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"
//   якщо значення змінної х являється falsy (хибноподібне, тобто кастується до false)
// let x = prompt() || `default`;
// console.log(x);

// let x='str';
// if (!!x===false){
//   console.log("default");
// }
// else
// {
//   console.log('ura');}
let x=' ';
if (x){
  console.log("ura");
}
else
{
  console.log('defolt');}
