// - створити функцію яка обчислює та повертає площу прямокутника
// зі сторонами а і б
//
// function areaRectangle(a, b) {
//   let areaRect = a * b;
//   console.log(areaRect);
//   return areaRect;
// }
//
// areaRectangle(4, 5);
// areaRectangle(8, 9);
// areaRectangle(45, 68);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function areaСircle(r, p) {
//   let area = p * (r ** 2);
//   console.log(area);
//   return area;
// }
// areaСircle(15, 3.14);
// areaСircle(150, 3.14);

// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r
//
// function cilindre (h,p,r) {
//   let cilindreArea = (h*r*2*p)+(2*(p*(r**2)));
//   console.log(cilindreArea);
//   return cilindreArea;
// }
// cilindre(40,57,3.14);
// cilindre(10,10,3.14);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let qaws = [1,2,3];
// function ewq(array) {
//   for (const item of array) {
//     console.log(item);
//   }
// }
// ewq(qaws)

// - створити функцію яка створює параграф з текстом.
// Текст задати через аргумент
// function fo(text){
//   document.write(`<p>${text}</p>`)
// };
// fo(`hi`)

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
// function oo(text) {
//   document.write(
//     `<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`
//   )
// }
// oo(`hello`)

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function oo(text,num) {
//   document.write(`<ul>`)
//   for (let i = 0; i < num; i++) {
//         document.write(`<li>${texti}</li>`)
//           }
//   document.write(`</ul>`)
// };
// oo(`hello`,10);

// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
// let arr = [1, 2, true.false, `str`]
//
//
// const elem = function (array) {
//   document.write(`<ul>`)
//   for (const item of array) {
// document.write(`<li>${item}</li>`)
//   }
// document.write(`</li>`)
// }
// elem(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
// const arr = [
//   {
//     name: `Dima`,
//     age: 56
//   },
//   {
//     name: `Ivan`,
//     age: 16
//   }
// ]
// const user = function (array) {
//   for (const user of array) {
//     document.write(`${user.name}--${user.age}`)
//   }
// }
// user(arr);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 2, 3, -100];
// function foo(array) {
//   let min = array[0];
//   for (const item of array) {
//     if (item < min) {
//   min = item
//     }
//   }
//
// return min
// }
// let foo1 = foo(arr)
// console.log(foo1);

// // - створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,3];
// function foo(array) {
// let sum = 0;
//   for (const item of array) {
//   sum +=item;
//   }
// return sum;
// }
//
// console.log(foo(arr));
